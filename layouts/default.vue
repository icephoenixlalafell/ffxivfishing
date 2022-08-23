<template>
  <div :class="['content', 'wrapper']">
    <cheader :handleDarkMode="handleDarkMode"/>
    <nuxt />
    <cfooter />
  </div>
</template>
<script>
export default {
  name: 'defaultLayout',
  data() {
    return {
      darkMode: true
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.darkMode ? ['dark'] : []
      }
    }
  },
  methods: {
    handleDarkMode() {
      this.darkMode = !this.darkMode;
      console.log( this.darkMode );
    }
  }
}
</script>
