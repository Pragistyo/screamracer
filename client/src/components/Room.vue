<template lang="html">
  <div class="container">
    <div class="row">
      <div class="row">
        <div class="col-sm-6 col-md-6" v-for="(data, index) in dataRoom" >
          <div class="thumbnail style-user">
            <img v-bind:src="data.picture" alt="gambar" class="gambar-style">
            <div class="caption text-center">
              <h3>Player {{ 1 + index }}</h3>
              <h2 class="style-font"> {{ data.username }}</h2>
              <button type="button" name="button" class="btn btn-danger" @click="logOut(data['.key'])"> Log out</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <button v-if="dataRoom.length ===  2" type="button" name="button" class="btn btn-info btn-lg button-style" @click="start"> Mulai
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
export default {
  firebase () {
    return {
      dataRoom: Vue.prototype.$db.ref('screamracer/room1')
    }
  },
  computed: {
    ...mapState([
      'Login',
      'arrPlay'
    ])
  },
  methods: {
    logOut (id) {
      Vue.prototype.$db.ref('screamracer/room1/' + id).remove()
    },
    start () {
      // this.$db.ref('screamracer').child('start').push('player')
      // if (this.arrPlay.length === 2) {
      //   this.$router.push('/play')
      // }
      this.$db.ref('screamracer').child('start').set(true)
    },
    check () {
    }
  },
  mounted () {
    this.$db.ref('screamracer').child('start').set(false)
    this.$db.ref('screamracer').on('value', snap => {
      let isStart = snap.val().start
      if (isStart) this.$router.push('/play')
    })
  }
}
</script>

<style lang="css">
.thumbnail.style-user {
  height: 595px;
}
img.gambar-style {
  width: 100%;
  height: 400px;
}
button.btn.btn-info.btn-lg.button-style {
  width: 284px;
  height: 92px;
  font-size: 36px;
  font-family: 'Lobster', cursive;
}
</style>
