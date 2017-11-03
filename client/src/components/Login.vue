<template lang="html">
  <div>
    <div class="container">
      <div class="row">
          <div class="list-group">
            <a href="#" class="list-group-item active">
              Player 1
            </a>
            <a href="#" class="list-group-item">
              <button type="button" name="button" class="btn btn-info" @click="loginFb1"> Fb Login</button>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import swal from 'sweetalert'
import { mapState, mapActions } from 'vuex'
export default {
  firebase () {
    return {
      dataRoom: Vue.prototype.$db.ref('screamracer/room1')
    }
  },
  computed: {
    ...mapState([
      'Login',
      'Login2'
    ])
  },
  created () {
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)['0']
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '162528727671302',
        cookie: true,  // enable cookies to allow the server to access
        xfbml: true,  // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
      })
    }
  },
  methods: {
    loginFb1 () {
      var self = this
      window.FB.login(function (response) {
        console.log('inin response', response)
        if (response.status === 'connected') {
          window.FB.api('/me', {fields: 'name,picture.type(large)'}, function (response) {
            console.log(response.name)
            if (self.dataRoom.length >= 2) {
              swal('I am Sorry', 'the room was just full', 'error')
            } else {
              self.getPlayer(response)
              if (self.dataRoom.length === 1) {
                localStorage.setItem('playerKey', self.dataRoom[0]['.key'])
                localStorage.setItem('playerIdx', '0')
              } else {
                localStorage.setItem('playerKey', self.dataRoom[1]['.key'])
                localStorage.setItem('playerIdx', '1')
              }
              self.$router.push('/room')
            }
          })
        }
      })
    },
    ...mapActions([
      'getPlayer'
    ])
  }
}
</script>

<style lang="css">
</style>
