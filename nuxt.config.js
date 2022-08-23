export default {
  build: {
    loaders: {
      sass: {
        implementation: require('sass')
      },
      scss: {
        implementation: require('sass')
      }
    },
    vendor: ['eorzea-time', 'vuex'],
  },
  head: {
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap'},
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
    title: 'FFXIV Fishing Tool',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        name: 'description',
        content: 'Making fishing easy with a range of calculators/tools'
      },
      {
        name: 'theme-color',
        content: '#cce'
      }
    ]
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  plugins: [
    {
      src: '~/plugins/vue-toggle-button.js',
      ssr: false
    }
  ],  
  components: true,
  productionTip: false,
  devtools: true,
  target: 'static'
}