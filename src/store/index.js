import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import store from './modules/store'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
      modules: {
          user,
          store
      }
  })
}
