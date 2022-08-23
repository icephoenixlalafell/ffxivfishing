<template>
  <main>
    <h1 class="h2" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="h2" v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </main>
</template>

<script>
export default {
  props: ['error']
}
</script>
