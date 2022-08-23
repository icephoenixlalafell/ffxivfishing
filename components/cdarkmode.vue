<template>
  <client-only>
    <div class="darkmode-toggle">
      <toggle-button @change="handleDarkMode" :labels="{checked: toggleLightLabel, unchecked: toggleDarkLabel}" :css-colors="true" :width="toggleWidth"/>
    </div>
  </client-only>
</template>
<script>
export default {
  name: 'cdarkmode',
  props: {
    handleDarkMode: Function,
  },
  computed: {
    toggleLightLabel() {
      if (typeof window != "undefined"  && window.innerWidth < 700) {
        return 'Light';
      }
      return 'Light Mode';
    },
    toggleDarkLabel() {
      if (typeof window != "undefined" && window.innerWidth < 700) {
        return 'Dark';
      }
      return 'Dark Mode';
    },
    toggleWidth() {
      if (typeof window != "undefined"  && window.innerWidth < 700) {
        return 60;
      } else {
        return 90;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base/shared/_variables.scss';
  .darkmode-toggle {
    display: flex;
    align-items: center;
    .vue-js-switch {
      ::v-deep {

        .v-switch-core {
          background-color: $nav-background-color;
        }
        
        .v-switch-label {
          color: $hover-color;
        }

      }

      &.toggled ::v-deep {

        .v-switch-core {
          background-color: $nav-dark-background-color;
        }

        .v-switch-label {
          color: $white;  
        }

      }

            
    }
  }

</style>
