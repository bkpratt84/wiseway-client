<template>
    <section id="documents" v-if="loggedIn">
        <v-snackbar
          v-model="notification"
          :success="notificationColor === 'success'"
          :info="notificationColor === 'info'"
          :warning="notificationColor === 'warning'"
          :error="notificationColor === 'error'"
          bottom
          multi-line
        >
          {{ notificationText }}
          <v-btn dark flat @click.native="notification = false">Close</v-btn>    
        </v-snackbar>

        <v-layout
            column
            wrap
            class="grey lighten-2"
            align-center
        >
            <v-flex xs12>
                <v-layout row wrap align-center mt-3>
                  <v-flex xs12>
                      <v-card class="elevation-0 transparent">
                      <v-card-title primary-title class="layout justify-center">
                          <div class="text-xs-center display-1 section-header">Therapist Documents</div>
                      </v-card-title>

                      </v-card>
                  </v-flex>
                </v-layout>
            </v-flex>

            <v-flex>
              <v-card class="mb-5 mt-3">
                  <v-card-title primary-title class="layout justify-center">
                  <v-text-field
                      v-model="search"
                      append-icon="search"
                      label="Search"
                      single-line
                      hide-details
                  ></v-text-field>

                    <v-tooltip bottom>
                      <v-btn slot="activator" icon @click="dialog = true">
                        <v-icon color="red lighten-2">fa-plus-circle</v-icon>
                      </v-btn>

                      <span>Add Document</span>
                    </v-tooltip>
                  </v-card-title>

                  <v-data-table
                  :headers="headers"
                  :items="docs"
                  :search="search"
                  hide-actions
                  >
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-left">{{ props.item.title }}</td>
                        <td class="text-xs-left">{{ props.item.description }}</td>
                        <td class="text-xs-left">{{ props.item.filename }}</td>
                        <td class="justify-center layout px-0">
                          <v-tooltip bottom>
                            <v-btn slot="activator" icon class="mx-0" @mousedown="showDocument(props.item['.key'])">
                                <v-icon color="red lighten-2">fa-file</v-icon>
                            </v-btn>

                            <span>View Document</span>
                          </v-tooltip>

                          <v-tooltip bottom>
                            <v-btn slot="activator" icon class="mx-0" @click="deleteDocument(props.item['.key'])">
                                <v-icon color="red lighten-2">fa-trash</v-icon>
                            </v-btn>

                            <span>Delete Document</span>
                          </v-tooltip>
                        </td>
                    </template>

                    <v-alert slot="no-results" :value="true" color="error" icon="warning">
                        Your search for "{{ search }}" found no results.
                    </v-alert>

                    <v-alert slot="no-data" :value="true" color="red lighten-2" icon="info">
                      No documents to display.
                    </v-alert>
                  </v-data-table>
              </v-card>
            </v-flex>
        </v-layout>

      <v-dialog
        v-model="dialog"
        :fullscreen="fullscreen"
        max-width="500px"
      >
        <v-card>
          <v-card-title class="red lighten-2 white--text">
            <span class="headline">Add New Document</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Title"
                    required
                    v-model="form.title"
                    prepend-icon="fas fa-book"
                    color="red lighten-2"
                    :error="$v.form.title.$error"
                    :error-messages="($v.form.title.$dirty && !$v.form.title.required) ? 'Title Required.' : []"
                    @input="$v.form.title.$touch()"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    label="Description"
                    required
                    v-model="form.description"
                    prepend-icon="fas fa-bars"
                    color="red lighten-2"
                    :error="$v.form.description.$error"
                    :error-messages="($v.form.description.$dirty && !$v.form.description.required) ? 'Description Required.' : []"
                    @input="$v.form.description.$touch()"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    label="File"
                    required
                    v-model="form.fileInput"
                    prepend-icon="fas fa-file"
                    color="red lighten-2"
                    :error="$v.form.fileInput.$error"
                    :error-messages="($v.form.fileInput.$dirty && !$v.form.fileInput.required) ? 'File Required.' : []"
                    @click="pickFile"
                    outline
                    loading
                    readonly
                  >
                    <v-progress-linear
                      slot="progress"
                      :value="progress"
                      color="green"
                      height="7"
                      v-show="showProgress"
                    ></v-progress-linear>
                  </v-text-field>

                  <input type="file" ref="file" @change="handleFileUpload" hidden>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" @click.native="clearDialog">Close</v-btn>
            <v-btn color="blue darken-1" @click.native="submitDialog" :disabled="$v.form.$invalid">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </section>
</template>

<script>
  import SnackbarQueue from '@/mixins/snackbarQueue'
  import { docsRef, storageRef } from '@/lib/firebase'
  import { required } from 'vuelidate/lib/validators'

  export default {
    mixins: [
      SnackbarQueue
    ],

    props: {
      loggedIn: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      dialog: false,
      form: {
        title: '',
        description: '',
        fileInput: '',
        file: null
      },
      headers: [
        { text: 'Document', value: 'title', align: 'left' },
        { text: 'Description', value: 'description' },
        { text: 'File', value: 'filename' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      progress: 0,
      search: '',
      showProgress: false
    }),

    validations: {
      form: {
        title: {
          required
        },
        description: {
          required
        },
        fileInput: {
          required
        }
      }
    },

    firebase: {
      docs: docsRef
    },

    computed: {
      fullscreen() {
        if (this.$vuetify.breakpoint.xsOnly) {
          return true
        }

        return false
      }
    },

    methods: {
      deleteDocument(key) {
        let filename

        let ref = docsRef.child(key).once('value').then(snapshot => {
          filename = (snapshot.val() && snapshot.val().filename)
        }).then(() => {
          if (filename) {
            let fileRef = storageRef.child(filename)

            fileRef.delete()
            docsRef.child(key).remove()
          }
        }).catch(error => {
          vm.addNotification('Unable to retrieve document: ' + error, 'error')
        })
      },

      clearDialog() {
        this.form.title = ''
        this.form.description = ''
        this.form.fileInput = ''
        this.file = null
        this.search = ''
        this.dialog = false
        this.progress = 0
        this.showProgress = false
        this.$refs.file.value = ''
      },

      handleFileUpload() {
        this.$v.$touch()

        let fileInput = this.$refs.file

        if (fileInput.files.length === 0) {
          this.form.fileInput = null
          return
        }

        let file = fileInput.files[0]
        this.form.fileInput = file.name
        this.form.file = file
      },

      pickFile() {
        this.$refs.file.click()
      },

      showDocument(key) {
        let vm = this
        let filename
        let newTab = window.open('', '_blank')

        let ref = docsRef.child(key).once('value').then(snapshot => {
          filename = (snapshot.val() && snapshot.val().filename)
        }).then(() => {
          if (filename) {
            let fileRef = storageRef.child(filename)

            fileRef.getDownloadURL().then(url => {
              newTab.location.href = url
            }).catch(error => {
              newTab.close()
              vm.addNotification('Unable to retrieve URL: ' + error, 'error')
            })
          }
        }).catch(error => {
          newTab.close()
          vm.addNotification('Unable to retrieve URL: ' + error, 'error')
        })
      },

      submitDialog() {
        let vm = this
        this.showProgress = true

        let item = {
          title: this.form.title,
          description: this.form.description,
          filename: this.form.file.name
        }

        let file = this.form.file

        docsRef.push(item).then(data => {
          let fileRef = storageRef.child(file.name).put(file)

          fileRef.on('state_changed', snapshot => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            vm.progress = progress
          }, error => {
            data.remove()
            vm.clearDialog()
            vm.addNotification('Error saving file: ' + error, 'error')
          }, () => {
            vm.clearDialog()
            vm.addNotification('File added.', 'success')
          })
        }).catch(error => {
          data.remove()
          vm.clearDialog()
          vm.addNotification('Error saving file: ' + error, 'error')
        })
      }
    }
  }
</script>