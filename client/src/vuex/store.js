import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)
Vue.use(Vuex)

var config = {
  apiKey: 'AIzaSyC4VKBs7lB9ytAvBvVepyCYrd26Jo7yzDw',
  authDomain: 'suling-bambu.firebaseapp.com',
  databaseURL: 'https://suling-bambu.firebaseio.com',
  projectId: 'suling-bambu',
  storageBucket: 'suling-bambu.appspot.com',
  messagingSenderId: '173827949968'
}
const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

Vue.prototype.$db = db

const state = {
  Login: {
    name: null,
    picture: null
  },
  Login2: {
    name: null,
    picture: null
  }
}

const mutations = {

}

const actions = {
  getPlayer ({commit}, payload) {
    Vue.prototype.$db.ref('screamracer/room1').push({
      username: payload.name,
      picture: payload.picture.data.url
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
