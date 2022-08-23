<template>
  <main class="no-padding">
      <img id="orca" :src="orcaImage" alt="Skadi with Orca"
        :srcset="orcaSourceSet"
        sizes="(max-width: 1021px) 769w, (max-width: 1919px) 1024w, (max-width: 3839px) 1920w, 3840w" width="100%"
      />
  </main>    
</template>
<script>

const baseOrcaFileName = 'orca';

export default {
  name: 'homepage',
  layout: 'default',
  computed: {
    orcaSourceSet() {
      return `/img/${baseOrcaFileName}_768.jpg 768w,` +
      ` /img/${baseOrcaFileName}_1024.jpg 1024w,` +
      ` /img/${baseOrcaFileName}_1920.jpg 1920w,` + 
      ` /img/${baseOrcaFileName}_3840.jpg 3840w` ;
    },
    orcaImage() {
      return `/img/${baseOrcaFileName}_3840.jpg`;
    }
  },
  mounted() {
  },
  beforeDestroy() {
  }
}
</script>
