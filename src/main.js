import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSession from 'vue-session'
import VueSimpleAlert from 'vue-simple-alert'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueCookie,
  VueSession,
  VueSimpleAlert,
  render: h => h(App)
}).$mount('#app')
