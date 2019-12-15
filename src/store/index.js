import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '../store/modules/userStore'
import postStore from '../store/modules/postStore'

Vue.use(Vuex)

let store = {}

var modules = { userStore, postStore }

if (window.addStoreModule) {
  window.addStoreModule(modules)
} else {
  store = new Vuex.Store({
    modules: modules
  })
}

export default store
