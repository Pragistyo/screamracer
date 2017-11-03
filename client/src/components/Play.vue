<template lang="html">
  <div id="main-cont">
    <div id="cont">
      <div id="myProgress">
        <img id="player-one" v-bind:style="{left: ((players[0].count/30000) * 100) + '%'}" :src="players[0].picture">
      </div>
      <div id="myProgress">
        <img id="player-two" v-bind:style="{left: ((players[1].count/30000) * 100) + '%'}" :src="players[1].picture">
      </div>
    </div>
<!--   <div id="mask">
    <div id="countdown">
      <h1>3</h1>
    </div>
  </div> -->
  </div>
</template>
<script>
import Dbmeter from 'decibel-meter'
import swal from 'sweetalert'

const dbmeter = new Dbmeter('unique-id')

export default {
  data () {
    return {
      playerKey: localStorage.getItem('playerKey'),
      playerIdx: Number(localStorage.getItem('playerIdx'))
    }
  },
  firebase () {
    return {
      players: this.$db.ref('screamracer/room1')
    }
  },
  methods: {
    listening () {
      const seth = (val) => {
        this.$db.ref('screamracer/room1').child(this.playerKey).child('count').set(val)
      }

      dbmeter.connectTo(0)
      dbmeter.listen()
      dbmeter.on('sample', (dB, percent, value) => {
        let winner = null
        if (percent > 50) {
          seth(this.players[this.playerIdx].count += percent)

          if (this.players[0].count >= 30000 || this.players[1].count >= 30000) {
            if (this.players[0].count > this.players[1].count) {
              winner = this.players[0].username
              this.players[0].count = 30000
            } else {
              winner = this.players[1].username
              this.players[1].count = 30000
            }
            swal(`WINNER: ${winner}`)
            dbmeter.stopListening()
            this.$db.ref('screamracer').child('finished').set(true)
          }
        }
      })
    }
  },
  mounted () {
    this.listening()
    this.$db.ref('screamracer').child('finished').set(false)
    this.$db.ref('screamracer').on('value', snap => {
      let isFinished = snap.val().finished
      localStorage.clear()
      if (isFinished) {
        this.$db.ref('screamracer/room1').set(null)
        this.$router.push('/')
      }
    })
  }
}
</script>

<style lang="css">
  #mask {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #myProgress {
    width: 100%;
    background-color: #ddd;
    margin: 32px 0;
    position: relative;
    border-radius: 100px;
  }

  #cont {
    width: 80%;
    margin: 0 auto;
  }
  
  #start {
    display: none;
  }

  #player-one, #player-two {
    position: relative;
    left: 100px;
    width: auto;
    height: 128px;
    border-radius: 100%;
    background-color: #4CAF50;
  }
</style>
