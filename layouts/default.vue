<script>
import TheNavbar from '~/components/TheNavbar.vue'
export default {
  components: { TheNavbar }
}
</script>
<template>
  <div id="main">
    <TheNavbar />
    <div class="container mx-auto">
      <nuxt />
    </div>
  </div>
</template>

<style scoped>
#main {
  background-color: #f4fbfa;
}
</style>
