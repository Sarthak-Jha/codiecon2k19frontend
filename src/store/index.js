import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '../store/modules/userStore'
import postStore from '../store/modules/postStore'

Vue.use(Vuex)

var modules = { userStore, postStore }

const store = new Vuex.Store({
  modules: modules
})

export default store;