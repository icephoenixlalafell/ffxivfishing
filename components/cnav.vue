<template>
  <div>
    <div class="wrapper no-padding default-bg menu-bar">
      <nav>
        <ul>
          <li><nuxt-link to="/ocean-fishing">Ocean Fishing Reference</nuxt-link></li>          
          <li><nuxt-link to="/fish-leves">Fishing Leves</nuxt-link></li>
        </ul>
      </nav>
      <clogin />
    </div>
  </div>
</template>
<style scoped>
  .menu-bar {
    display: flex;
    justify-content: space-between;
  }
</style>