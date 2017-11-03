<template lang="html">
  <div class="jumbotron player1">
    <div class="container">
      <div class="col-md-3">
        <img v-bind:src="Login2.picture" alt="gambar" class="img-circle img-responsive">
        <div class="text-center">
          <h3 class="style-font">Player 2</h3>
          <h2 class="style-font"> {{ Login2.name }} </h2>
        </div>
      </div>
      <div class="col-md-9">
        <div class="progress progress-striped active">
          <div class="progress-bar" style="width: 45%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'Login2'
    ])
  },
  data () {
    return {
      imgUrl: 'http://images.goodsmile.info/cgm/images/product/20160927/5981/41608/large/283820e0d12a55d17e3a0f1b855090d0.jpg'
    }
  }
}
</script>

<style lang="css">
.jumbotron.player1 {
  box-shadow: 8px 7px 11px 4px;
}
.style-font {
  font-family: 'Noto Serif', serif;
  color: black;
  font-weight: bold;
}
.progress.progress-striped.active {
  margin-top: 128px;
}
.jumbotron.player1 {
  background-color: #fff;
}
</style>
