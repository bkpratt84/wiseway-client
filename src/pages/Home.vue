<template>
  <v-app>
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

    <toolbar
      :title="title"
      :loggedIn="vIsLoggedIn"
    ></toolbar>

    <v-content>
      <section id="home">
        <v-parallax src="../static/zen_garden.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
            wrap
          >

            <h1 class="white--text mb-2 display-2 logo-font">The Wise Way Counseling</h1>
            <h1 class="white--text mb-2 display-1">Call {{ contactNumber }} to schedule an appointment!</h1>
          </v-layout>
        </v-parallax>
      </section>

      <section id="about">
        <v-layout
          column
          wrap
          class="my-3 white"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md10 offset-md1>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-xs-center display-1 section-header">About Us</div>
                    </v-card-title>

                    <v-card-text class="text-xs-center pb-0">
                      <img src="static/logo.jpg" alt="The Wise Way Counseling" :height="logoSize">
                    </v-card-text>

                    <v-card-text>
                      <h1>Our Mission</h1>
                      <div class="subheading">
                        It is the mission of The Wise Way Counseling to improve the lives of those in Oklahoma by providing complete mental health services designed 
                        to enrich and improve the lives of children, youth, adults and families.
                      </div>

                      <div class="subheading mt-3">
                        The Wise Way Counseling was established in 2017 to provide evidence based, high quality, professional services throughout the Oklahoma City 
                        metro area. The Wise Way Counseling is home to a team of highly respected and trained mental health professionals.
                      </div>

                      <div class="subheading mt-3">
                        Our team of professionals each have unique skill sets that are used to help meet the needs of each individual by offering a variety of therapeutic 
                        services for all ages on an individual, couple, family, and group basis. Through counseling, individuals can enhance understanding of their own 
                        emotions and feelings and how they react to those emotions and feelings. Individuals can also learn skills to cope with uncomfortable feelings, 
                        as well as gain a better understanding of how to problem solve more effectively.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="services">
        <v-layout
          column
          wrap
          class="my-3 grey lighten-2"
          align-center
        >
          <v-flex xs12 sm4 class="my-3 pt-4">
            <div class="text-xs-center">
              <h2 class="display-1 section-header">Services Offered</h2>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-user</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Individual Counseling</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Individual Counseling is provided to consumers 3 years of age or older to address needs in multiple domains such as anxiety, 
                        anger, behavior, trauma, depression, stress, divorce, abuse, death, grief, as well as much more. Individuals will gain a 
                        better understanding of how to cope with a variety of emotions and feelings relating to these areas. Individual therapy is 
                        offered 1-2 times per week, based on a needs assessment.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-users</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Family Counseling</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Family Counseling is provided to consumers of all ages in need of constructing a more functional family system and to address 
                        a multitude of needs relating to various family dynamics. Consumers participating in family counseling will gain a better 
                        understanding of how working together can help improve everyday living, enhancing the quality of life. This service is offered 
                        1-2 times per week, based on a needs assessment.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-heart</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Marriage Counseling</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Marriage Counseling is provided to consumers experiencing difficulties or concerns within their marriage, affecting various areas 
                        of life. Services will help couples recognize and resolve conflicts, improving their relationships. Pre-marital counseling services 
                        are also provided to consumers at The Wise Way Counseling.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-hands</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Group Psychotherapy</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Group psychotherapy is a special form of therapy in which a small number of people meet together under the guidance of a profession-ally 
                        trained therapist to help them-selves and one another. Group therapy helps people learn about them-selves and improve their interpersonal 
                        relationships. It addresses feelings of isolation, depression or anxiety. And it helps people make significant changes so they feel better 
                        about the quality of their lives. Additionally, group therapists can apply the principles of group to other set-tings and situations such 
                        as businesses, schools and community organizations.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>

          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1 section-header">Additional Services Offered</h2>
              <span class="subheading">
                In addition to services described above, we also offer:
              </span>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 sm4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-eye</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">EMDR<br><br></div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12 sm4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-sticky-note</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Psychological Evaluations</div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12 sm4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-band-aid</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Trauma Assessments</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="providers">
        <v-layout
          column
          wrap
          class="my-3 white"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl class="pt-1">
              <v-layout row wrap align-center>
                <v-flex xs12 md10 offset-md1>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-xs-center display-1 section-header">Our Providers</div>
                    </v-card-title>

                    <v-card-text>
                      <div class="subheading">
                        At the Wise Way Counseling, we have many therapists with a variety of specialties, degrees, licenses, and experience. We provide 
                        services to consumers in the OKC Metro as well as surrounding areas. Our team currently provides services in English and Spanish 
                        at this time.   
                      </div>

                      <div class="subheading mt-3">
                        The Wise Way Counseling is always seeking licensed mental health professionals, as well as candidates, to join our team. We have 
                        Board Approved LPC Supervisors on site to provide supervision for candidates. If interested in a career with The Wise Way Counseling, 
                        please contact Emily at <span class="blue--text">{{ contactNumber }}</span>. 
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <doc :loggedIn="vIsLoggedIn"></doc>

      <section id="contact">
        <v-layout>
          <v-flex>
            <v-card flat tile class="flex">
              <v-card-title class="red lighten-2 white--text">
                <strong class="subheading">Get connected with us on social networks!</strong>
                <v-spacer></v-spacer>
                <v-btn
                  v-for="icon in icons"
                  :key="icon.key"
                  icon
                  dark
                  class="mx-3"
                  :href="icon.url"
                  target="_blank"
                >
                  <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 sm6 class="grey lighten-3">
            <v-card flat tile>
              <v-list class="grey lighten-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <span class="body-2">CONTACT</span>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action class="justify-center">
                    <v-icon color="red lighten-2">fas fa-envelope</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>emily@thewisewaycounseling.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action class="justify-center">
                    <v-icon color="red lighten-2">fas fa-phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ contactNumber }}</v-list-tile-title>
                    <v-list-tile-sub-title>Call to schedule an appointment.</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="dialog = true">
                  <v-list-tile-action class="justify-center">
                    <v-icon color="red lighten-2">fas fa-question</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Have a question?</v-list-tile-title>
                    <v-list-tile-sub-title>Click here to send a message.</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6>
            <v-card flat tile>
              <v-list class="grey lighten-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <span class="body-2">ADDRESS</span>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action class="justify-center">
                    <v-icon color="red lighten-2">fas fa-map-marker-alt</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>6801 South Western Avenue</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action></v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Suite 203 & 205</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action></v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Oklahoma City, Oklahoma 73139</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 class="grey lighten-3">
            <iframe id="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.6874301262965!2d-97.53190458987032!3d35.3976766274836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b213f36751c3bd%3A0x16ebd0c5507ca43e!2s6801+S+Western+Ave%2C+Oklahoma+City%2C+OK+73139!5e0!3m2!1sen!2sus!4v1525307246546" frameborder="0" style="border:0" allowfullscreen></iframe>
          </v-flex>
        </v-layout>
      </section>

      <v-footer height="auto" class="red lighten-2">
        <v-layout row wrap justify-center>
          <v-flex xs12 py-3 text-xs-center white--text>
            &copy;2018 — <strong>{{ title }}</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>

    <v-dialog
      v-model="dialog"
      :fullscreen="fullscreen"
      max-width="500px"
    >
      <v-card>
        <v-card-title class="red lighten-2 white--text">
          <span class="headline">Contact Form</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="Name"
                  required
                  v-model="form.name"
                  prepend-icon="fas fa-user"
                  color="red lighten-2"
                  :error="$v.form.name.$error"
                  :error-messages="($v.form.name.$dirty && !$v.form.name.required) ? 'Name Required.' : []"
                  @input="$v.form.name.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  label="Phone"
                  required
                  v-model="form.phone"
                  prepend-icon="fas fa-phone"
                  color="red lighten-2"
                  mask="phone"
                  :error="$v.form.phone.$error"
                  :error-messages="($v.form.phone.$dirty && !$v.form.phone.required) ? 'Name Required.'
                    :($v.form.phone.$dirty && !$v.form.phone.minLength) ? 'Invalid phone number.'
                    : []"
                  @input="$v.form.phone.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  label="Email"
                  required
                  v-model="form.email"
                  prepend-icon="fas fa-envelope"
                  color="red lighten-2"
                  :error="$v.form.email.$error"
                  :error-messages="($v.form.email.$dirty && !$v.form.email.required) ? 'Email Required.'
                    :($v.form.email.$dirty && !$v.form.email.email) ? 'Invalid email address.'
                    : []"
                  @input="$v.form.email.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  label="Primary Insurance"
                  required
                  v-model="form.insurance"
                  prepend-icon="fas fa-ambulance"
                  color="red lighten-2"
                  :error="$v.form.insurance.$error"
                  :error-messages="($v.form.insurance.$dirty && !$v.form.insurance.required) ? 'Field Required. Type N/A if this does not apply.' : []"
                  @input="$v.form.insurance.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-textarea
                  name="Message"
                  box
                  outline
                  label="Message"
                  auto-grow
                  v-model="form.message"
                  color="red lighten-2"
                  :error="$v.form.message.$error"
                  :error-messages="($v.form.message.$dirty && !$v.form.message.required) ? 'Message Required.' : []"
                  @input="$v.form.message.$touch()"
                ></v-textarea>
              </v-flex>

              <v-flex xs12>
                <p class="red--text">{{ nonEmergencyText }}</p>

                <v-checkbox
                  :label="checkboxLabel"
                  v-model="form.checkbox"
                  color="red lighten-2"
                  required
                  :error="$v.form.checkbox.$error"
                  :error-messages="($v.form.checkbox.$dirty && !$v.form.checkbox.mustBeTrue) ? 'Must agree to continue.' : []"
                  @change="$v.form.checkbox.$touch()"
                ></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click.native="clearDialog">Close</v-btn>
          <v-btn color="blue darken-1" @click.native="submitDialog" :disabled="$v.form.$invalid">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="loginDialog"
      :fullscreen="fullscreen"
      max-width="500px"
    >
      <v-card>
        <v-card-title class="red lighten-2 white--text">
          <span class="headline">Login Form</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="Email"
                  required
                  v-model="loginForm.email"
                  prepend-icon="fas fa-envelope"
                  color="red lighten-2"
                  :error="$v.loginForm.email.$error"
                  :error-messages="($v.loginForm.email.$dirty && !$v.loginForm.email.required) ? 'Email Required.'
                    :($v.loginForm.email.$dirty && !$v.loginForm.email.email) ? 'Invalid email address.'
                    : []"
                  @input="$v.loginForm.email.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  label="Password"
                  type="password"
                  required
                  v-model="loginForm.password"
                  prepend-icon="fas fa-phone"
                  color="red lighten-2"
                  :error="$v.loginForm.password.$error"
                  :error-messages="($v.loginForm.password.$dirty && !$v.loginForm.password.required) ? 'Password Required.' : []"
                  @input="$v.loginForm.password.$touch()"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click.native="clearLoginDialog">Close</v-btn>
          <v-btn color="blue darken-1" @click.native="submitLoginDialog" :disabled="$v.loginForm.$invalid">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import Doc from '@/components/Doc'
  import SnackbarQueue from '@/mixins/snackbarQueue'
  import Toolbar from '@/components/Toolbar'
  import { required, email, minLength } from 'vuelidate/lib/validators'
  import { mapActions, mapGetters } from 'vuex'
  import * as emailjs from 'emailjs-com'

  const mustBeTrue = (value) => value == true

  export default {
    mixins: [
      SnackbarQueue
    ],

    components: {
      Toolbar,
      Doc
    },

    data () {
      return {
        checkboxLabel: 'I acknowledge that this is not an emergency.',
        nonEmergencyText: 'This is not an emergency/crisis contact form. If you need emergency help, dial 911 or proceed to the nearest emergency room.',
        dialog: false,
        form: {
          name: '',
          phone: '',
          email: '',
          insurance: '',
          message: '',
          checkbox: false
        },
        loginForm: {
          email: '',
          password: ''
        },
        title: 'The Wise Way Counseling',
        contactNumber: '405-821-6447',
        icons: [
          { key: 1, icon: 'fab fa-facebook', url: 'https://www.facebook.com/thewisewaycounseling/' }
        ]
      }
    },

    validations: {
      form: {
        name: {
          required
        },
        phone: {
          required,
          minLength: minLength(10)
        },
        email: {
          required,
          email
        },
        insurance: {
          required
        },
        message: {
          required
        },
        checkbox: {
          mustBeTrue
        }
      },
      
      loginForm: {
        email: {
          required,
          email
        },
        password: {
          required
        }
      }
    },

    computed: {
      loginDialog: {
        get () { return this.$store.state.store.loginDialog },
        set (value) { this.vLoginDialog(value) }
      },

      logoSize() {
        if (!this.$vuetify.breakpoint.xsOnly) {
          return 300
        }
        
        return 175
      },

      fullscreen() {
        if (this.$vuetify.breakpoint.xsOnly) {
          return true
        }

        return false
      },

      ...mapGetters({
          vIsLoggedIn: 'isLoggedIn'
      })
    },

    methods: {
      clearDialog() {
        this.form.name = ''
        this.form.phone = ''
        this.form.email = ''
        this.form.insurance = ''
        this.form.message = ''
        this.form.checkbox = false
        this.dialog = false
      },

      submitDialog() {
        let params = {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          insurance: this.form.insurance,
          message: this.form.message
        }

        emailjs.send("wiseway_sendgrid", "wiseway", params, 'user_vJ5X2oyPPlfpuJYfzLkGj')
        .then(response => {
          this.clearDialog()
          this.addNotification('Thank you! Message sent.', 'success')
        }, error => {
          this.clearDialog()
          this.addNotification('Failed to send message. Please try again later!', 'error')
        })
      },

      ...mapActions({
          vLoginDialog: 'setLoginDialog',
          vSetUser: 'setUser'
      }),

      clearLoginDialog() {
        this.loginForm.email = ''
        this.loginForm.password = ''
        this.vLoginDialog(false)
      },

      submitLoginDialog() {
        this.$firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
        .then(user => {
          this.vSetUser(user)
          this.clearLoginDialog()
          this.addNotification('Successfully signed in.', 'success')
          this.$router.go()
        },
        (error) => {
          this.addNotification('Invalid login, try again!', 'error')
        }).catch(error => {
          this.clearLoginDialog()
          this.addNotification('Sorry, unable to reach authorization service. Please try again later!', 'error')
        })
      }
    }
  }
</script>

<style>
  #google-map {
    height: 400px;
    width: 100%;
  }

  .card-services {
    min-height: 110px;
  }

  .logo-font {
    font-family: 'Courgette', cursive;
  }

  .section-header {
    font-family: 'Changa One', cursive;
  }
</style>
