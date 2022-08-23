<template>
  <footer class="wrapper default-bg">
    <span>&copy; Ice &amp; Gale Phoenix 2020</span>
    <span><nuxt-link to="/credits">credits</nuxt-link></span>
  </footer>
</template>
<script>
export default {
  name: 'cfooter'
}
</script>
<style scoped>
footer {
  display: flex;
  justify-content: space-between;  
}
</style>