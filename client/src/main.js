// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueFire from 'vuefire'
// import Firebase from 'firebase'
import store from './vuex/store'

// var config = {
//   apiKey: 'AIzaSyC4VKBs7lB9ytAvBvVepyCYrd26Jo7yzDw',
//   authDomain: 'suling-bambu.firebaseapp.com',
//   databaseURL: 'https://suling-bambu.firebaseio.com',
//   projectId: 'suling-bambu',
//   storageBucket: 'suling-bambu.appspot.com',
//   messagingSenderId: '173827949968'
// }
// const firebaseApp = Firebase.initializeApp(config)
// const db = firebaseApp.database()
//
// Vue.prototype.$db = db
// Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
