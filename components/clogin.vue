<template>
  <nav>
    <ul>
      <li v-if="currentUser"><span>Logged In as {{ fullName }}</span></li>
      <li data-netlify-identity-button></li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  mounted() {
    if ( window.netlifyIdentity ) {
      const ni = window.netlifyIdentity;
      ni.on( 'login', user => this.$store.dispatch( 'user/setUser', user));
      ni.on( 'logout', () => this.$store.dispatch( 'user/setUser', null));
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'user/getUser',
      fullName: 'user/getFullName',
    })
  }
}
</script>