<template>
  <main>
    <h1 class="h2">Ocean Fishing Reference</h1>
    <div class="filters">
      <div class="filterGroup mainFilter">
        <div class="filter">        
          <h2 class="h3">{{sectionTitles.target}}</h2>
          <button @click="gotoTargetFish" :class="{ 'filter-on': filters.targetFish}" v-html="targetTitles.fish"></button>
          <button @click="gotoTargetTitle" :class="{ 'filter-on': filters.targetTitle}" v-html="targetTitles.title"></button>
        </div>
        <div class="filter" v-if="filters.targetFish">
          <h2 class="h3">{{sectionTitles.type}}</h2>
          <button @click="gotoPerRoute" :class="{ 'filter-on': filters.perRoute}" v-html="typeTitles.route"></button>
          <button @click="gotoPerLocationTime" :class="{ 'filter-on': filters.perLocationTime}" v-html="typeTitles.location"></button>
        </div>
        <div class="filter mainFilter">
          <h2 class="h3">Route Schedule</h2>
          <a href="https://proyebat.github.io/oceancalculator/" target="_blank" rel="nofollow noopener">Ocean Fishing Schedule Calculator</a>
        </div>
      </div>
      <div v-if="filters.perRoute && filters.targetFish">
        <h2 class="h3">{{sectionTitles.route}}</h2>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoNorthernNightDaySunsetRoute" :class="{ 'filter-on': filters.northernNightDaySunsetRoute}" v-html="routeTitles[routes.northernNightDaySunsetRoute]"></button>
          <button @click="gotonorthernDaySunsetNightRoute" :class="{ 'filter-on': filters.northernDaySunsetNightRoute}" v-html="routeTitles[routes.northernDaySunsetNightRoute]"></button>
          <button @click="gotonorthernSunsetNightDayRoute" :class="{ 'filter-on': filters.northernSunsetNightDayRoute}" v-html="routeTitles[routes.northernSunsetNightDayRoute]"></button>
        </div>      
        <div class="filter routeFilter filterGroup">
          <button @click="gotoRhotanoSeaNightDaySunsetRoute" :class="{ 'filter-on': filters.rhotanoSeaNightDaySunsetRoute}" v-html="routeTitles[routes.rhotanoSeaNightDaySunsetRoute]"></button>
          <button @click="gotoRhotanoSeaDaySunsetNightRoute" :class="{ 'filter-on': filters.rhotanoSeaDaySunsetNightRoute}" v-html="routeTitles[routes.rhotanoSeaDaySunsetNightRoute]"></button>
          <button @click="gotoRhotanoSeaSunsetNightDayRoute" :class="{ 'filter-on': filters.rhotanoSeaSunsetNightDayRoute}" v-html="routeTitles[routes.rhotanoSeaSunsetNightDayRoute]"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoRothlytSoundNightDaySunsetRoute" :class="{ 'filter-on': filters.rothlytSoundNightDaySunsetRoute}" v-html="routeTitles[routes.rothlytSoundNightDaySunsetRoute]"></button>
          <button @click="gotoRothlytSoundDaySunsetNightRoute" :class="{ 'filter-on': filters.rothlytSoundDaySunsetNightRoute}" v-html="routeTitles[routes.rothlytSoundDaySunsetNightRoute]"></button>
          <button @click="gotoRothlytSoundSunsetNightDayRoute" :class="{ 'filter-on': filters.rothlytSoundSunsetNightDayRoute}" v-html="routeTitles[routes.rothlytSoundSunsetNightDayRoute]"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoBloodbrineSeaNightDaySunsetRoute" :class="{ 'filter-on': filters.bloodbrineSeaNightDaySunsetRoute}" v-html="routeTitles[routes.bloodbrineSeaNightDaySunsetRoute]"></button>
          <button @click="gotoBloodbrineSeaDaySunsetNightRoute" :class="{ 'filter-on': filters.bloodbrineSeaDaySunsetNightRoute}" v-html="routeTitles[routes.bloodbrineSeaDaySunsetNightRoute]"></button>
          <button @click="gotoBloodbrineSeaSunsetNightDayRoute" :class="{ 'filter-on': filters.bloodbrineSeaSunsetNightDayRoute}" v-html="routeTitles[routes.bloodbrineSeaSunsetNightDayRoute]"></button>
        </div>
      </div>
      <div v-if="filters.perLocationTime && filters.targetFish">
        <h2 class="h3">{{sectionTitles.location}}</h2>
        <div class="filter locationFilter filterGroup">
          <button @click="toggleGaladionBayDay" :class="{ 'filter-on': filters.galadionBayDay }" v-html="locationFilterTitles.galadionBay.day"></button>
          <button @click="toggleGaladionBaySunset" :class="{ 'filter-on': filters.galadionBaySunset }" v-html="locationFilterTitles.galadionBay.Sunset"></button>
          <button @click="toggleGaladionBayNight" :class="{ 'filter-on': filters.galadionBayNight }" v-html="locationFilterTitles.galadionBay.night"></button>
          <button @click="toggleSouthernDay" :class="{ 'filter-on': filters.southernDay }" v-html="locationFilterTitles.southern.day"></button>
          <button @click="toggleSouthernSunset" :class="{ 'filter-on': filters.southernSunset }" v-html="locationFilterTitles.southern.Sunset"></button>
          <button @click="toggleSouthernNight" :class="{ 'filter-on': filters.southernNight }" v-html="locationFilterTitles.southern.night"></button>
          <button @click="toggleCieldalaesDay" :class="{ 'filter-on': filters.cieldalaesDay }" v-html="locationFilterTitles.cieldalaes.day"></button>
          <button @click="toggleCieldalaesSunset" :class="{ 'filter-on': filters.cieldalaesSunset }" v-html="locationFilterTitles.cieldalaes.Sunset"></button>
          <button @click="toggleCieldalaesNight" :class="{ 'filter-on': filters.cieldalaesNight }" v-html="locationFilterTitles.cieldalaes.night"></button>
          <button @click="toggleRhotanoSeaDay" :class="{ 'filter-on': filters.rhotanoSeaDay }" v-html="locationFilterTitles.rhotanoSea.day"></button>
          <button @click="toggleRhotanoSeaSunset" :class="{ 'filter-on': filters.rhotanoSeaSunset }" v-html="locationFilterTitles.rhotanoSea.Sunset"></button>
          <button @click="toggleRhotanoSeaNight" :class="{ 'filter-on': filters.rhotanoSeaNight }" v-html="locationFilterTitles.rhotanoSea.night"></button>
          <button @click="toggleNorthernDay" :class="{ 'filter-on': filters.northernDay }" v-html="locationFilterTitles.northern.day"></button>
          <button @click="toggleNorthernSunset" :class="{ 'filter-on': filters.northernSunset }" v-html="locationFilterTitles.northern.Sunset"></button>
          <button @click="toggleNorthernNight" :class="{ 'filter-on': filters.northernNight }" v-html="locationFilterTitles.northern.night"></button>
          <button @click="toggleRothlytSoundDay" :class="{ 'filter-on': filters.rothlytSoundDay }" v-html="locationFilterTitles.rothlytSound.day"></button>
          <button @click="toggleRothlytSoundSunset" :class="{ 'filter-on': filters.rothlytSoundSunset }" v-html="locationFilterTitles.rothlytSound.Sunset"></button>
          <button @click="toggleRothlytSoundNight" :class="{ 'filter-on': filters.rothlytSoundNight }" v-html="locationFilterTitles.rothlytSound.night"></button>
          <button @click="toggleBloodbrineSeaDay" :class="{ 'filter-on': filters.bloodbrineSeaDay }" v-html="locationFilterTitles.bloodbrineSea.day"></button>
          <button @click="toggleBloodbrineSeaSunset" :class="{ 'filter-on': filters.bloodbrineSeaSunset }" v-html="locationFilterTitles.bloodbrineSea.Sunset"></button>
          <button @click="toggleBloodbrineSeaNight" :class="{ 'filter-on': filters.bloodbrineSeaNight }" v-html="locationFilterTitles.bloodbrineSea.night"></button>
        </div>
      </div>
      <div v-if="filters.targetTitle">
        <h2 class="h3">{{sectionTitles.location}}</h2>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoJelly" :class="{ 'filter-on': filters.jellyRoute }" v-html="titleFilterTitles.jelly"></button>
          <button @click="gotoSeaDragon" :class="{ 'filter-on': filters.seaDragonRoute }" v-html="titleFilterTitles.seaDragon"></button>
          <button @click="gotoOctopus" :class="{ 'filter-on': filters.octopusRoute }" v-html="titleFilterTitles.octopus"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoShark" :class="{ 'filter-on': filters.sharkRoute }" v-html="titleFilterTitles.shark"></button>
          <button @click="gotoCrab" :class="{ 'filter-on': filters.crabRoute }" v-html="titleFilterTitles.crab"></button>
          <button @click="gotoBalloon" :class="{ 'filter-on': filters.balloonRoute }" v-html="titleFilterTitles.balloon"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoManta" :class="{ 'filter-on': filters.mantaRoute }" v-html="titleFilterTitles.manta"></button>
        </div>
      </div>   
    </div>
    <div v-if="( currentRoute !== null && filters.perRoute && filters.targetFish ) || ( currentTitleRoute !== null && filters.targetTitle ) || ( hasLocations && filters.perLocationTime && filters.targetFish )">
      <h3 class="h4">{{sectionTitles.strat}}</h3>
      <div class="location-baits-wrapper">
        <table class="location-baits" v-if="filters.perRoute && filters.targetFish">
          <thead>
            <tr>
              <th v-html="stratHeadings.conditions"></th>
              <th v-html="stratHeadings.bait"></th>
              <th v-html="stratHeadings.strat"></th>
              <th v-html="stratHeadings.doublehook"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in routeLocationOrder[currentRoute]" :key="i">
              <td v-if="item">
                <div v-if="item.location && content[item.location]" v-html="content[item.location].location"></div>
                <div class="conditions">
                  <span class="phase" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].phase"></span>
                  <span class="weather" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].weather != 'Normal'" v-html="content[item.location][item.phase].weather"></span>
                  <span class="time" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].time != 'Any'" v-html="content[item.location][item.phase].time"></span>
                </div>
              </td>
              <td v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].bait"></td>
              <td class="strat" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].strategy">
                <ol v-if="Array.isArray(content[item.location][item.phase].strategy)">
                  <li v-for="(strat, index) in content[item.location][item.phase].strategy" v-html="strat" :key="`routestrat-${index}`"></li>
                </ol>
              </td>
              <td class="double-hook" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].doublehook">
                <ol v-if="Array.isArray(content[item.location][item.phase].doublehook)">
                  <li v-for="(dh, index) in content[item.location][item.phase].doublehook" v-html="dh" :key="`routedh-${index}`"></li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="location-baits" v-if="filters.perLocationTime && filters.targetFish">
          <thead>
            <tr>
              <th v-html="stratHeadings.conditions"></th>
              <th v-html="stratHeadings.bait"></th>
              <th v-html="stratHeadings.strat"></th>
              <th v-html="stratHeadings.doublehook"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in locationTimeOrder" :key="i">
              <td v-if="item">
                <div v-if="item.location && content[item.location]" v-html="content[item.location].location"></div>
                <div class="conditions">
                  <span class="phase" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].phase"></span>
                  <span class="weather" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].weather != 'Normal'" v-html="content[item.location][item.phase].weather"></span>
                  <span class="time" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].time != 'Any'" v-html="content[item.location][item.phase].time"></span>
                </div>
              </td>
              <td v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].bait"></td>
              <td class="strat" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].strategy">
                <ol v-if="Array.isArray(content[item.location][item.phase].strategy)">
                  <li v-for="(strat, index) in content[item.location][item.phase].strategy" v-html="strat" :key="`timestrat-${index}`"></li>
                </ol>
              </td>
              <td class="double-hook" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].doublehook">
                <ol v-if="Array.isArray(content[item.location][item.phase].doublehook)">
                  <li v-for="(dh, index) in content[item.location][item.phase].doublehook" v-html="dh" :key="`routedh-${index}`"></li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="location-baits" v-if="filters.targetTitle">
          <thead>
            <tr>
              <th v-html="stratHeadings.conditions"></th>
              <th v-html="stratHeadings.bait"></th>
              <th v-html="stratHeadings.strat"></th>
              <th v-html="stratHeadings.doublehook"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in targetTitleOrder" :key="i">
              <td v-if="item">
                <div v-if="item.location && content[item.location]" v-html="content[item.location].location"></div>
                <div class="conditions">
                  <span class="phase" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].phase"></span>
                  <span class="weather" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].weather != 'Normal'" v-html="content[item.location][item.phase].weather"></span>
                  <span class="time" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].time != 'Any'" v-html="content[item.location][item.phase].time"></span>
                </div>
              </td>
              <td v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].bait"></td>
              <td class="strat" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].strategy">
                <ol v-if="Array.isArray(content[item.location][item.phase].strategy)">
                  <li v-for="(strat, index) in content[item.location][item.phase].strategy" v-html="strat" :key="`titlestrat-${index}`"></li>
                </ol>
              </td>
              <td class="double-hook" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].doublehook">
                <ol v-if="Array.isArray(content[item.location][item.phase].doublehook)">
                  <li v-for="(dh, index) in content[item.location][item.phase].doublehook" v-html="dh" :key="`titledh-${index}`"></li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    
  </main>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState('oceanFishing', ['filters', 'routes', 'currentRoute', 'currentTitleRoute']),
    ...mapGetters({
      targetTitles: 'oceanFishing/getTargetTitles',
      sectionTitles: 'oceanFishing/getSectionTitles',
      typeTitles: 'oceanFishing/getTypeTitles',
      routeTitles: 'oceanFishing/getRouteTitles',
      content: 'oceanFishing/getContent',
      titleFilterTitles: 'oceanFishing/getTitleFilterTitles',
      locationFilterTitles: 'oceanFishing/getLocationFilterTitles',
      stratHeadings: 'oceanFishing/getStratHeadings',
      routeLocationOrder: 'oceanFishing/getRouteLocationOrder',      
      locationTimeOrder: 'oceanFishing/getLocationTimeOrder',
      targetTitleOrder: 'oceanFishing/getTargetTitleOrder',
      hasLocations: 'oceanFishing/hasLocations'
    })   
  },
  methods: {
    gotoTargetFish() {
      this.$store.commit('oceanFishing/updateFilters', { targetFish: true, targetTitle: false });
    },
    gotoTargetTitle() {
      this.$store.commit('oceanFishing/updateFilters', { targetFish: false, targetTitle: true });
    },
    gotoPerRoute() {
      this.$store.commit('oceanFishing/updateFilters', { perRoute: true, perLocationTime: false });
    },
    gotoPerLocationTime() {
      this.$store.commit('oceanFishing/updateFilters', { perRoute: false, perLocationTime: true });
    },
    gotoNorthernNightDaySunsetRoute() { // Southern Night, Galadion Day, Northern Sunset
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.northernNightDaySunsetRoute);
    },
    gotonorthernDaySunsetNightRoute() { // Southern Day, Galadion Sunset, Northern Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.northernDaySunsetNightRoute);
    },
    gotonorthernSunsetNightDayRoute() { // Southern Sunset, Galadion Night, Northern Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.northernSunsetNightDayRoute);      
    },
    gotoRhotanoSeaNightDaySunsetRoute() { // Galadion Night, Southern Day, Rhotano Sunset
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rhotanoSeaNightDaySunsetRoute);
    },
    gotoRhotanoSeaDaySunsetNightRoute() {  // Galadion Day, Southern Sunset, Rhotano Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rhotanoSeaDaySunsetNightRoute);
    },
    gotoRhotanoSeaSunsetNightDayRoute() { // Galadion Sunset, Southern Night, Rhotano Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rhotanoSeaSunsetNightDayRoute);      
    },
    gotoRothlytSoundNightDaySunsetRoute() { // Cieldalaes Night, Rhotano Day, Rothlyt Sunset
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rothlytSoundNightDaySunsetRoute);      
    },
    gotoRothlytSoundDaySunsetNightRoute() { // Cieldalaes Day, Rhotano Sunset, Rothlyt Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rothlytSoundDaySunsetNightRoute);
    },
    gotoRothlytSoundSunsetNightDayRoute() { // Cieldalaes Sunset, Rhotano Night, Rothlyt Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rothlytSoundSunsetNightDayRoute);      
    },
    gotoBloodbrineSeaNightDaySunsetRoute() { // Cieldalaes Night, Northrn Day, Bloodbrine Sunset
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.bloodbrineSeaNightDaySunsetRoute);      
    },
    gotoBloodbrineSeaDaySunsetNightRoute() { // Cieldalaes Day, Northern Sunset, Bloodbrine Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.bloodbrineSeaDaySunsetNightRoute);
    },
    gotoBloodbrineSeaSunsetNightDayRoute() { // Cieldalaes Sunset, Northern Night, Bloodbrine Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.bloodbrineSeaSunsetNightDayRoute);      
    },
    gotoJelly() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.jellyRoute);
    },
    gotoSeaDragon() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.seaDragonRoute);
    },
    gotoOctopus() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.octopusRoute);
    },
    gotoShark() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.sharkRoute);
    },
    gotoCrab() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.crabRoute);
    },
    gotoBalloon() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.balloonRoute);
    },
    gotoManta() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.mantaRoute);
    },
    toggleGaladionBayDay() {
      this.$store.commit('oceanFishing/updateFilters', { galadionBayDay: !this.filters.galadionBayDay });      
    },
    toggleGaladionBaySunset() {
      this.$store.commit('oceanFishing/updateFilters', { galadionBaySunset: !this.filters.galadionBaySunset });
    },
    toggleGaladionBayNight() {
      this.$store.commit('oceanFishing/updateFilters', { galadionBayNight: !this.filters.galadionBayNight });
    },
    toggleRhotanoSeaDay() {
      this.$store.commit('oceanFishing/updateFilters', { rhotanoSeaDay: !this.filters.rhotanoSeaDay });
    },
    toggleRhotanoSeaSunset() {
      this.$store.commit('oceanFishing/updateFilters', { rhotanoSeaSunset: !this.filters.rhotanoSeaSunset });
    },
    toggleRhotanoSeaNight() {
      this.$store.commit('oceanFishing/updateFilters', { rhotanoSeaNight: !this.filters.rhotanoSeaNight });
    },
    toggleNorthernDay() {
      this.$store.commit('oceanFishing/updateFilters', { northernDay: !this.filters.northernDay });
    },
    toggleNorthernSunset() {
      this.$store.commit('oceanFishing/updateFilters', { northernSunset: !this.filters.northernSunset });
    },
    toggleNorthernNight() {
      this.$store.commit('oceanFishing/updateFilters', { northernNight: !this.filters.northernNight });
    },
    toggleSouthernDay() {
      this.$store.commit('oceanFishing/updateFilters', { southernDay: !this.filters.southernDay });
    },
    toggleSouthernSunset() {
      this.$store.commit('oceanFishing/updateFilters', { southernSunset: !this.filters.southernSunset });
    },
    toggleSouthernNight() {
      this.$store.commit('oceanFishing/updateFilters', { southernNight: !this.filters.southernNight });
    },
    toggleCieldalaesDay() {
      this.$store.commit('oceanFishing/updateFilters', { cieldalaesDay: !this.filters.cieldalaesDay });
    },
    toggleCieldalaesSunset() {
      this.$store.commit('oceanFishing/updateFilters', { cieldalaesSunset: !this.filters.cieldalaesSunset });
    },
    toggleCieldalaesNight() {
      this.$store.commit('oceanFishing/updateFilters', { cieldalaesNight: !this.filters.cieldalaesNight });
    },
    toggleRothlytSoundDay() {
      this.$store.commit('oceanFishing/updateFilters', { rothlytSoundDay: !this.filters.rothlytSoundDay });
    },
    toggleRothlytSoundSunset() {
      this.$store.commit('oceanFishing/updateFilters', { rothlytSoundSunset: !this.filters.rothlytSoundSunset });
    },
    toggleRothlytSoundNight() {
      this.$store.commit('oceanFishing/updateFilters', { rothlytSoundNight: !this.filters.rothlytSoundNight });      
    },
    toggleBloodbrineSeaDay() {
      this.$store.commit('oceanFishing/updateFilters', { bloodbrineSeaDay: !this.filters.bloodbrineSeaDay });
    },
    toggleBloodbrineSeaSunset() {
      this.$store.commit('oceanFishing/updateFilters', { bloodbrineSeaSunset: !this.filters.bloodbrineSeaSunset });
    },
    toggleBloodbrineSeaNight() {
      this.$store.commit('oceanFishing/updateFilters', { bloodbrineSeaNight: !this.filters.bloodbrineSeaNight });
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base/shared/_variables.scss';
.location-baits-wrapper {
  display: flex;
  justify-content: center;

  .location-baits {
    th {
      font-weight: 700;
      font-family: $heading-font-family;
      font-size: rem-calc(20);
      padding: 5px;
      border-bottom: 1px solid $nav-background-color;
      &.vertical {
        vertical-align: middle;
      }
    }

    td {
      padding: 2px 1px;
      text-align: center;
      
      @media screen and (min-width: 700px) {
        padding: 10px 5px;
      }

      &.strat {
        max-width:500px;
      }

      &.double-hook {
        white-space: nowrap;
      }

      &.strat, &.double-hook {
        text-align: left;

        ol {
          list-style: decimal inside;          
        }
      }
      
      &.vertical {
        vertical-align: middle;
      }
    }
  }
}
</style>