<template>
  <v-layout v-resize="onResize">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list class="pt-0" dense v-for="item in items" :key="item.key">
        <v-list-tile
          v-if="item.href && (!item.auth || (item.auth == true && loggedIn))"
          @click="$vuetify.goTo(`#${item.href}`, options)"
          :class="{'red--text text-lighten-3': item.href == activeIndex}"
          >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="item.auth == false && !loggedIn" @click="showLoginDialog">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      fixed
      class="white"
      height="58"
      v-scroll="onScroll"
    >
      <v-toolbar-title v-text="title" class="red--text text-lighten-3 logo-font"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in items" :key="item.key" class="hidden-sm-and-down">
        <v-btn
          v-if="item.href && (!item.auth || (item.auth == true && loggedIn))"
          flat
          @click="$vuetify.goTo(`#${item.href}`, options)"
          :class="{'red--text text-lighten-3': item.href == activeIndex}"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-if="!loggedIn"
          flat
          @click="showLoginDialog"
        >
          Therapist Login
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-if="loggedIn"
          flat
          @click="logout"
        >
          Logout
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up">
        <v-btn @click.stop="drawer = !drawer" icon>
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-layout>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      title: {
        type: String
      },

      loggedIn: {
        type: Boolean,
        default: false
      },

      options: {
        type: Object,
        default: () => {
          return {
            duration: 300,
            offset: -58,
            easing: 'easeInOutCubic'
          }
        }
      },

      defaultIndex: {
        type: String,
        default: () => ('Home')
      }
    },

    data: () => ({
      currentOffset: 0,
      sizeOffset: 0,
      isBooted: false,
      listItems: [],
      drawer: false,
      items: [
        { key: 1, href: 'home', title: 'Home', auth: null },
        { key: 2, href: 'about', title: 'About', auth: null },
        { key: 3, href: 'services', title: 'Services Offered', auth: null },
        { key: 4, href: 'providers', title: 'Our Providers', auth: null },
        { key: 5, href: 'documents', title: 'Therapist Documents', auth: true },
        { key: 6, href: 'contact', title: 'Contact', auth: null },
        { key: 7, href: null, title: 'Therapist Login', auth: false },
        { key: 8, href: null, title: 'Logout', auth: true }
      ]
    }),

    watch: {
      isBooted () {
        this.genList()
        this.currentOffset = window.pageYOffset || document.documentElement.offsetTop
      }
    },

    computed: {
      activeIndex () {
        let list = this.listItems.slice().reverse()
        let index = list.findIndex(item => item.offsetTop - this.sizeOffset < this.currentOffset)
        let atBottom = 0

        if (this.isBooted && window)
          atBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight
        
        // if (list.length > 0)
        // console.log(list[0].href)

        return index > -1 ? (atBottom ? list[0].href : list[index].href) : this.defaultIndex
      }
    },

    mounted() {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    },

    methods: {
      ...mapActions({
          sShowLoginDialog: 'setLoginDialog',
          sClearUser: 'clearUser'
      }),

      genList() {
        let list = []

        for (let item of this.items) {
          item = Object.assign({}, item)

          let target = item.target || document.getElementById(item.href)

          if (target) {
            item.offsetTop = target.offsetTop
            item.target = target
            list.push(item)
          }
        }

        this.listItems = list
      },

      logout() {
        let vm = this

        this.$firebase.auth().signOut()
          .then(function() {
            vm.sClearUser()
          })
          .catch(function(error) {
            console.log(error)
          })
      },

      onScroll() {
        this.currentOffset = window.pageYOffset || document.documentElement.offsetTop
      },

      onResize() {
        this.genList()
        this.currentOffset = window.pageYOffset || document.documentElement.offsetTop
        this.sizeOffset = window.innerWidth <= 960 ? 100 : 60
      },

      showLoginDialog() {
        this.sShowLoginDialog(true)
      },
    }
  }
</script>
