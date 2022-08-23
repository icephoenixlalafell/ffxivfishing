<template>
  <client-only>
    <span class="timer" v-html="timerText + et"></span>
  </client-only>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'cclock',
  computed: {
    ...mapGetters({
      et: 'eorzeaTime/getTime'
    }),
    timerText() {
      if (typeof window != "undefined"  && window.innerWidth < 700) {
        return 'ET:&nbsp;';
      } else {
        return 'Eorzea Time:&nbsp;';
      }
    }
  },
  methods: {
    ...mapActions({
      updateTime: 'eorzeaTime/updateTime'
    })    
  },
  mounted() {
    const self = this;
    self.updateTime();
    
    self.intervalID1 = setInterval( function() {
      self.updateTime();
    }, 500 );
  },
  beforeDestroy() {
    if ( self.intervalID1 ) {
      clearInterval(self.intervalID1)
    }
  }
}
</script>