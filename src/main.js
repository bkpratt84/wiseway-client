// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { createStore } from './store/index'
import 'vuetify/dist/vuetify.min.css'

import { firebaseApp } from './lib/firebase'
import VueFire from 'vuefire'

import axios from 'axios'
import Vuelidate from 'vuelidate'

let app

axios.defaults.baseURL = process.env.API_Base_URL;
axios.defaults.validateStatus = false;

Vue.prototype.$firebase = firebaseApp
Vue.prototype.$http = axios

Vue.use(Vuelidate)
Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})
Vue.use(VueFire)

Vue.config.productionTip = false

const store = createStore()

firebaseApp.auth().onAuthStateChanged(function(user) {
  if (!app) {
    if(user) {
      store.dispatch('setUser', user)
    } else {
      store.dispatch('clearUser')
    }

    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
})
