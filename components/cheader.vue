<template>
  <div>
    <header class="wrapper default-bg">
      <nuxt-link :class="['logo-link']" to="/">
        <h1 v-if="isHomepage">FFXIV Fishing Tool</h1>
        <span v-if="!isHomepage" class="h1">FFXIV Fishing Tool</span>
      </nuxt-link>
      <cdarkmode :handleDarkMode="handleDarkMode"/>
      <cclock />
    </header>
    <cnav />
  </div>
</template>
<script>
export default {
  props: {
    handleDarkMode: Function
  },
  data() {
    return {
      isHomepage: this.$route.path == "/"
    }
  }  
}
</script>
<style lang="scss" scoped>
header {
  display: flex;

  .logo-link {
    flex: 1 1 auto;
  }

  .darkmode-toggle {
    margin-left: 20px;
    margin-right: 20px;

    @media screen and (min-width: 700px) {
      margin-left: 0;
      margin-right: 50px;
    }
  }  
}

</style>
