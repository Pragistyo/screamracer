<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <Room></Room>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Room from '@/components/Room'
export default {
  components: {
    Navbar,
    Room
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
