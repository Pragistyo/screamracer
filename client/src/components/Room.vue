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
              <!-- <button type="button" name="button" class="btn btn-danger" @click="logOut(data['.key'])"> Log out</button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <button type="button" name="button" class="btn btn-info btn-lg button-style" @click="jumlahTest"> Mulai</button>
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
      'Login'
    ])
  },
  methods: {
    // logOut (id) {
    //   Vue.prototype.$db.ref('screamracer/room1/' + id).remove()
    // },
    jumlahTest () {
      // alert(JSON.stringify(Vue.prototype.$db.ref('screamracer/room1')))
      alert(JSON.stringify(this.dataRoom))
      console.log(Vue.prototype.$db.ref('screamracer/room1'))
    }
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
