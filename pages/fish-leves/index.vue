<template>
  <main>
    <h1 class="h2">Fishing Levequests</h1>
    <div class="filters">
      <div class="mainFilter filter">
        <button @click="toggleARR" :class="{ 'filter-on': filters.arr }" v-html="sectionTitles.arr"></button>
        <button @click="toggleHeavensward" :class="{ 'filter-on': filters.hw }" v-html="sectionTitles.hw"></button>
        <button @click="toggleStormblood" :class="{ 'filter-on': filters.sb }" v-html="sectionTitles.sb"></button>
        <button @click="toggleShadowbringers" :class="{ 'filter-on': filters.shb }" v-html="sectionTitles.shb"></button>
      </div>
      <div v-if="filters.arr" class="levelFilter filter">
        Level:
        <button @click="toggleLevel('level1')" :class="{ 'filter-on': filters.level1 }">1</button>
        <button @click="toggleLevel('level5')" :class="{ 'filter-on': filters.level5 }">5</button>
        <button @click="toggleLevel('level10')" :class="{ 'filter-on': filters.level10 }">10</button>
        <button @click="toggleLevel('level15')" :class="{ 'filter-on': filters.level15 }">15</button>
        <button @click="toggleLevel('level20')" :class="{ 'filter-on': filters.level20 }">20</button>
        <button @click="toggleLevel('level25')" :class="{ 'filter-on': filters.level25 }">25</button>
        <button @click="toggleLevel('level30')" :class="{ 'filter-on': filters.level30 }">30</button>
        <button @click="toggleLevel('level35')" :class="{ 'filter-on': filters.level35 }">35</button>
        <button @click="toggleLevel('level40')" :class="{ 'filter-on': filters.level40 }">40</button>
        <button @click="toggleLevel('level45')" :class="{ 'filter-on': filters.level45 }">45</button>
      </div>
      <div v-if="filters.hw" class="levelFilter filter">
        Level:
        <button @click="toggleLevel('level50')" :class="{ 'filter-on': filters.level50 }">50</button>
        <button @click="toggleLevel('level52')" :class="{ 'filter-on': filters.level52 }">52</button>
        <button @click="toggleLevel('level54')" :class="{ 'filter-on': filters.level54 }">54</button>
        <button @click="toggleLevel('level56')" :class="{ 'filter-on': filters.level56 }">56</button>
        <button @click="toggleLevel('level58')" :class="{ 'filter-on': filters.level58 }">58</button>        
      </div>
      <div v-if="filters.sb" class="levelFilter filter">
        Level:
        <button @click="toggleLevel('level60')" :class="{ 'filter-on': filters.level60 }">60</button>
        <button @click="toggleLevel('level62')" :class="{ 'filter-on': filters.level62 }">62</button>
        <button @click="toggleLevel('level64')" :class="{ 'filter-on': filters.level64 }">64</button>
        <button @click="toggleLevel('level66')" :class="{ 'filter-on': filters.level66 }">66</button>
        <button @click="toggleLevel('level68')" :class="{ 'filter-on': filters.level68 }">68</button>        
      </div>
      <div v-if="filters.shb" class="levelFilter filter">
        Level:
        <button @click="toggleLevel('level70')" :class="{ 'filter-on': filters.level70 }">70</button>
        <button @click="toggleLevel('level72')" :class="{ 'filter-on': filters.level72 }">72</button>
        <button @click="toggleLevel('level74')" :class="{ 'filter-on': filters.level74 }">74</button>
        <button @click="toggleLevel('level76')" :class="{ 'filter-on': filters.level76 }">76</button>
        <button @click="toggleLevel('level78')" :class="{ 'filter-on': filters.level78 }">78</button>        
      </div>
    </div>
    <div v-if="filters.arr">
      <h2 class="h3" v-html="sectionTitles.arr"></h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th v-html="leveHeadings.levequest"></th>
            <th v-html="leveHeadings.startNPC"></th>          
            <th v-html="leveHeadings.items"></th>
            <th v-html="leveHeadings.baits"></th>
            <th v-html="leveHeadings.fishingHole"></th>
            <th v-html="leveHeadings.endNPC"></th>
            <th v-html="leveHeadings.bonus"></th>
          </tr>
          <tr v-for="(item, i) in levequestARROrder" :key="i">
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].levequest"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].startNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].items"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].baits"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].fishingHole"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].endNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" class="vertical">
              <img v-if="content[item.expac][item.levequest].bonus" src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="filters.hw">
      <h2 class="h3" v-html="sectionTitles.hw"></h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th v-html="leveHeadings.levequest"></th>
            <th v-html="leveHeadings.startNPC"></th>          
            <th v-html="leveHeadings.items"></th>
            <th v-html="leveHeadings.baits"></th>
            <th v-html="leveHeadings.fishingHole"></th>
            <th v-html="leveHeadings.endNPC"></th>
            <th v-html="leveHeadings.bonus"></th>
          </tr>
          <tr v-for="(item, i) in levequestHeavenswardOrder" :key="i">
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].levequest"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].startNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].items"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].baits"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].fishingHole"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].endNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" class="vertical">
              <img v-if="content[item.expac][item.levequest].bonus" src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="filters.sb">
      <h2 class="h3" v-html="sectionTitles.sb"></h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th v-html="leveHeadings.levequest"></th>
            <th v-html="leveHeadings.startNPC"></th>          
            <th v-html="leveHeadings.items"></th>
            <th v-html="leveHeadings.baits"></th>
            <th v-html="leveHeadings.fishingHole"></th>
            <th v-html="leveHeadings.endNPC"></th>
            <th v-html="leveHeadings.bonus"></th>
          </tr>
          <tr v-for="(item, i) in levequestStormbloodOrder" :key="i">
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].levequest"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].startNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].items"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].baits"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].fishingHole"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].endNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" class="vertical">
              <img v-if="content[item.expac][item.levequest].bonus" src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="filters.shb">
      <h2 class="h3" v-html="sectionTitles.shb"></h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th v-html="leveHeadings.levequest"></th>
            <th v-html="leveHeadings.startNPC"></th>          
            <th v-html="leveHeadings.items"></th>
            <th v-html="leveHeadings.baits"></th>
            <th v-html="leveHeadings.fishingHole"></th>
            <th v-html="leveHeadings.endNPC"></th>
            <th v-html="leveHeadings.bonus"></th>
          </tr>
          <tr v-for="(item, i) in levequestShadowbringersOrder" :key="i">
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].levequest"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].startNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].items"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].baits"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].fishingHole"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" v-html="content[item.expac][item.levequest].endNPC"></td>
            <td v-if="item.expac && content[item.expac] && content[item.expac][item.levequest]" class="vertical">
              <img v-if="content[item.expac][item.levequest].bonus" src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </main>    
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState('levequests', ['content', 'filters']),
    ...mapGetters({
      updateFilters: 'levequests/updateFilters',
      sectionTitles: 'levequests/getSectionTitles',
      leveHeadings: 'levequests/getLeveHeadings',
      levequestARROrder: 'levequests/getLevequestARROrder',
      levequestHeavenswardOrder: 'levequests/getLevequestHeavenswardOrder',
      levequestStormbloodOrder: 'levequests/getLevequestStormbloodOrder',
      levequestShadowbringersOrder: 'levequests/getLevequestShadowbringersOrder'
    })
  },
  methods: {
    toggleLevel(level) {
      let obj = {};
      obj[level] = !this.filters[level];
      this.$store.commit('levequests/updateFilters', obj );
    },    
    toggleARR() {
      this.$store.commit('levequests/updateFilters', { arr: !this.filters.arr });
    },
    toggleHeavensward() {
      this.$store.commit('levequests/updateFilters', { hw: !this.filters.hw });
    },
    toggleStormblood() {
      this.$store.commit('levequests/updateFilters', { sb: !this.filters.sb });
    },
    toggleShadowbringers() {
      this.$store.commit('levequests/updateFilters', { shb: !this.filters.shb });
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base/shared/_variables.scss';

  .levequests-wrapper {
    display: flex;

    .levequests {
      flex: 1;

      th {
        font-weight: 700;
        font-family: $heading-font-family;
        font-size: rem-calc(10);
        padding: 5px;
        border-bottom: 1px solid $nav-background-color;

        @media screen and (min-width:700px) {
          font-size: rem-calc(20);
        }

        &.vertical {
          vertical-align: middle;
        }
      }
    
      td {
        padding: 2px 0;
        text-align: center;

        @media screen and (min-width:700px) {
          padding: 10px 5px;
        }
        
        @media screen and (max-width:699px) {
          img {
            max-width: 60px;
            max-height: 15px;
          }
        }
        
        &.vertical img {
          vertical-align: middle;
        }
      }
    }
  }
</style>