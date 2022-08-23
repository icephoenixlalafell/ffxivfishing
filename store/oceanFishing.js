import {
  content,
  sectionTitles,
  titleFilterTitles,
  targetTitles,
  typeTitles,
  routeTitles,
  locationFilterTitles,
  stratHeadings
} from '../content/oceanFishing';

export const NORTHERN_NIGHT_DAY_SUNSET = 0;
export const NORTHERN_DAY_SUNSET_NIGHT = 1;
export const NORTHERN_SUNSET_NIGHT_DAY = 2;
export const RHOTANO_NIGHT_DAY_SUNSET = 3;
export const RHOTANO_DAY_SUNSET_NIGHT = 4;
export const RHOTANO_SUNSET_NIGHT_DAY = 5;
export const ROTHLYT_NIGHT_DAY_SUNSET = 6;
export const ROTHLYT_DAY_SUNSET_NIGHT = 7;
export const ROTHLYT_SUNSET_NIGHT_DAY = 8;
export const BLOODBRINE_NIGHT_DAY_SUNSET = 9;
export const BLOODBRINE_DAY_SUNSET_NIGHT = 10;
export const BLOODBRINE_SUNSET_NIGHT_DAY = 11;
export const JELLY_ROUTE = 12;
export const SEA_DRAGON_ROUTE = 13;
export const OCTOPUS_ROUTE = 14;
export const SHARK_ROUTE = 15;
export const CRAB_ROUTE = 16;
export const BALLOON_ROUTE = 17;
export const MANTA_ROUTE = 18;

export const state = () => (
  {
    filters: {
      targetFish: true,
      targetTitle: false,
      perRoute: true,
      perLocationTime: false,
      galadionBayDay: false,
      galadionBaySunset: false,
      galadionBayNight: false,
      rhotanoSeaDay: false,
      rhotanoSeaSunset: false,
      rhotanoSeaNight: false,
      northernDay: false,
      northernSunset: false,
      northernNight: false,
      southernDay: false,
      southernSunset: false,
      southernNight: false,
      cieldalaesDay: false,
      cieldalaesSunset: false,
      cieldalaesNight: false,
      rothlytSoundDay: false,
      rothlytSoundSunset: false,
      rothlytSoundNight: false,
      bloodbrineSeaDay: false,
      bloodbrineSeaSunset: false,
      bloodbrineSeaNight: false,
      jellyRoute: false,
      seaDragonRoute: false,
      octopusRoute: false,
      sharkRoute: false,
      crabRoute: false,
      balloonRoute: false, 
      mantaRoute: false,     
      rhotanoSeaDaySunsetNightRoute: false,
      rhotanoSeaSunsetNightDayRoute: false,
      rhotanoSeaNightDaySunsetRoute: false,
      northernDaySunsetNightRoute: false,
      northernSunsetNightDayRoute: false,
      northernNightDaySunsetRoute: false,
      rothlytSoundDaySunsetNightRoute: false,
      rothlytSoundSunsetNightDayRoute: false,
      rothlytSoundNightDaySunsetRoute: false,
      bloodbrineSeaDaySunsetNightRoute: false,
      bloodbrineSeaSunsetNightDayRoute: false,
      bloodbrineSeaNightDaySunsetRoute: false
    },
    routes: {
      northernNightDaySunsetRoute: NORTHERN_NIGHT_DAY_SUNSET,
      northernDaySunsetNightRoute: NORTHERN_DAY_SUNSET_NIGHT,
      northernSunsetNightDayRoute: NORTHERN_SUNSET_NIGHT_DAY,
      rhotanoSeaNightDaySunsetRoute: RHOTANO_NIGHT_DAY_SUNSET,
      rhotanoSeaDaySunsetNightRoute: RHOTANO_DAY_SUNSET_NIGHT,
      rhotanoSeaSunsetNightDayRoute: RHOTANO_SUNSET_NIGHT_DAY,
      rothlytSoundNightDaySunsetRoute: ROTHLYT_NIGHT_DAY_SUNSET,
      rothlytSoundDaySunsetNightRoute: ROTHLYT_DAY_SUNSET_NIGHT,
      rothlytSoundSunsetNightDayRoute: ROTHLYT_SUNSET_NIGHT_DAY,
      bloodbrineSeaNightDaySunsetRoute: BLOODBRINE_NIGHT_DAY_SUNSET,
      bloodbrineSeaDaySunsetNightRoute: BLOODBRINE_DAY_SUNSET_NIGHT,
      bloodbrineSeaSunsetNightDayRoute: BLOODBRINE_SUNSET_NIGHT_DAY,
      jellyRoute: JELLY_ROUTE,
      seaDragonRoute: SEA_DRAGON_ROUTE,
      octopusRoute: OCTOPUS_ROUTE,
      sharkRoute: SHARK_ROUTE,
      crabRoute: CRAB_ROUTE,
      balloonRoute: BALLOON_ROUTE,
      mantaRoute: MANTA_ROUTE
    },
    currentRoute: null,
    currentTitleRoute: null,
    sectionTitles,
    targetTitles,
    titleFilterTitles,
    typeTitles,
    routeTitles,
    routeLocationOrder: [
      [ // 'Northern Strait (Night > Day > Sunset)'
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralNight' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectralShowers' },
        { location: 'galadionBay', phase: 'spectralDay' },
        { location: 'galadionBay', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralSunset' },
        { location: 'northern', phase: 'afterSpectral' }
      ],
      [ // 'Northern Strait (Day > Sunset > Night)'
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralDay' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectralShowers' },
        { location: 'galadionBay', phase: 'spectralSunset' },
        { location: 'galadionBay', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralNight' },
        { location: 'northern', phase: 'afterSpectral' }
      ],
      [ // 'Northern Strait (Sunset > Night > Day)'
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralSunset' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectralShowers' },
        { location: 'galadionBay', phase: 'spectralNight' },
        { location: 'galadionBay', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralDay' },
        { location: 'northern', phase: 'afterSpectral' }
      ],
      [ // 'Rhotano Sea (Night > Day > Sunset)'
        { location: 'galadionBay', phase: 'beforeSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectralShowers' },
        { location: 'galadionBay', phase: 'spectralNight' },
        { location: 'galadionBay', phase: 'afterSpectral' },
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralDay' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralSunset' },
        { location: 'rhotanoSea', phase: 'afterSpectral' }
      ],
      [ // 'Rhotano Sea (Day > Sunset > Night)'
        { location: 'galadionBay', phase: 'beforeSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectralShowers' },
        { location: 'galadionBay', phase: 'spectralDay' },
        { location: 'galadionBay', phase: 'afterSpectral' },
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralSunset' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralNight' },
        { location: 'rhotanoSea', phase: 'afterSpectral' }
      ],
      [ // 'Rhotano Sea (Sunset > Night > Day)'
        { location: 'galadionBay', phase: 'beforeSpectral' },
        { location: 'galadionBay', phase: 'beforeSpectralShowers' },
        { location: 'galadionBay', phase: 'spectralSunset' },
        { location: 'galadionBay', phase: 'afterSpectral' },
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralNight' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralDay' },
        { location: 'rhotanoSea', phase: 'afterSpectral' }
      ],
      [ // 'Rothlyt Sound (Night > Day > Sunset)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralNight' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralDay' },
        { location: 'rhotanoSea', phase: 'afterSpectral' },
        { location: 'rothlytSound', phase: 'beforeSpectral' },
        { location: 'rothlytSound', phase: 'spectralSunset' },
        { location: 'rothlytSound', phase: 'afterSpectral' }
      ],
      [ // 'Rothlyt Sound (Day > Sunset > Night)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralDay' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralSunset' },
        { location: 'rhotanoSea', phase: 'afterSpectral' },
        { location: 'rothlytSound', phase: 'beforeSpectral' },
        { location: 'rothlytSound', phase: 'spectralNight' },
        { location: 'rothlytSound', phase: 'afterSpectral' }
      ],
      [ // 'Rothlyt Sound (Sunset > Night > Day)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralSunset' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralNight' },
        { location: 'rhotanoSea', phase: 'afterSpectral' },
        { location: 'rothlytSound', phase: 'beforeSpectral' },
        { location: 'rothlytSound', phase: 'spectralDay' },
        { location: 'rothlytSound', phase: 'afterSpectral' }
      ],
      [ // 'Bloodbrine Sea (Night > Day > Sunset)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralNight' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralDay' },
        { location: 'northern', phase: 'afterSpectral' },
        { location: 'bloodbrineSea', phase: 'beforeSpectral' },
        { location: 'bloodbrineSea', phase: 'spectralSunset' },
        { location: 'bloodbrineSea', phase: 'afterSpectral' }
      ],
      [ // 'Bloodbrine Sea (Day > Sunset > Night)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralDay' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralSunset' },
        { location: 'northern', phase: 'afterSpectral' },
        { location: 'bloodbrineSea', phase: 'beforeSpectral' },
        { location: 'bloodbrineSea', phase: 'spectralNight' },
        { location: 'bloodbrineSea', phase: 'afterSpectral' }
      ],
      [ // 'Bloodbrine Sea (Sunset > Night > Day)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralSunset' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralNight' },
        { location: 'northern', phase: 'afterSpectral' },
        { location: 'bloodbrineSea', phase: 'beforeSpectral' },
        { location: 'bloodbrineSea', phase: 'spectralDay' },
        { location: 'bloodbrineSea', phase: 'afterSpectral' }
      ]
    ],
    locationFilterTitles,
    stratHeadings,
    content
  }
)

const pushFiltersJelly = (results) => {
  results.push({ location: 'galadionBay', phase: 'beforeSpectral'})
  results.push({ location: 'galadionBay', phase: 'beforeSpectralShowers' })
  results.push({ location: 'galadionBay', phase: 'spectralDay'})
  results.push({ location: 'galadionBay', phase: 'afterSpectral'})
  results.push({ location: 'jellyRouteSunset', phase: 'beforeSpectral'})
  results.push({ location: 'jellyRouteSunset', phase: 'spectralSunset'})
  results.push({ location: 'jellyRouteSunset', phase: 'afterSpectral'})
  results.push({ location: 'rhotanoSea', phase: 'beforeSpectral'})
  results.push({ location: 'jellyRouteNight', phase: 'spectralNight'})
  results.push({ location: 'rhotanoSea', phase: 'afterSpectral'})
  return results;
}

const pushFiltersSeaDragon = (results) => {
  results.push({ location: 'seaDragonRouteNight', phase: 'beforeSpectral'})
  results.push({ location: 'seaDragonRouteNight', phase: 'spectralNight'})
  results.push({ location: 'seaDragonRouteNight', phase: 'afterSpectral'})
  results.push({ location: 'galadionBay', phase: 'beforeSpectral'})
  results.push({ location: 'galadionBay', phase: 'beforeSpectralShowers' })
  results.push({ location: 'galadionBay', phase: 'spectralDay'})
  results.push({ location: 'galadionBay', phase: 'afterSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectralSnow' });
  results.push({ location: 'seaDragonRouteSunset', phase: 'spectralSunset'})
  results.push({ location: 'northern', phase: 'afterSpectral'})
  return results;
}

const pushFiltersOctopus = (results) => {
  results.push({ location: 'southern', phase: 'beforeSpectral'})
  results.push({ location: 'southern', phase: 'spectralDay'})
  results.push({ location: 'southern', phase: 'afterSpectral'})
  results.push({ location: 'octopusRouteSunset', phase: 'beforeSpectral'})
  results.push({ location: 'octopusRouteSunset', phase: 'spectralSunset'})
  results.push({ location: 'octopusRouteSunset', phase: 'afterSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectralSnow' });
  results.push({ location: 'octopusRouteNight', phase: 'spectralNight'})
  results.push({ location: 'northern', phase: 'afterSpectral'})
  return results;
}

const pushFiltersShark = (results) => {
  results.push({ location: 'sharkRouteSunset', phase: 'beforeSpectral'})
  results.push({ location: 'sharkRouteSunset', phase: 'spectralSunset'})
  results.push({ location: 'sharkRouteSunset', phase: 'afterSpectral'})
  results.push({ location: 'southern', phase: 'beforeSpectral'})
  results.push({ location: 'southern', phase: 'spectralNight'})
  results.push({ location: 'southern', phase: 'afterSpectral'})
  results.push({ location: 'sharkRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'sharkRouteDay', phase: 'spectralDay'})
  results.push({ location: 'sharkRouteDay', phase: 'afterSpectral'})
  return results;
}

const pushFiltersCrab = (results) => {
  results.push({ location: 'crabRouteSunset', phase: 'beforeSpectral'})
  results.push({ location: 'crabRouteSunset', phase: 'spectralSunset'})
  results.push({ location: 'crabRouteSunset', phase: 'afterSpectral'})
  results.push({ location: 'crabRouteNight', phase: 'beforeSpectral'})
  results.push({ location: 'crabRouteNight', phase: 'spectralNight'})
  results.push({ location: 'crabRouteNight', phase: 'afterSpectral'})
  results.push({ location: 'crabRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'crabRouteDay', phase: 'spectralDay'})
  results.push({ location: 'crabRouteDay', phase: 'afterSpectral'})
  
  return results;
}

const pushFiltersBalloon = (results) => {
  results.push({ location: 'balloonRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'balloonRouteDay', phase: 'spectralDay'})
  results.push({ location: 'balloonRouteDay', phase: 'afterSpectral'})
  results.push({ location: 'balloonRouteSunset', phase: 'beforeSpectral'})
  results.push({ location: 'balloonRouteSunset', phase: 'spectralSunset'})
  results.push({ location: 'balloonRouteSunset', phase: 'afterSpectral'})
  results.push({ location: 'balloonRouteNight', phase: 'beforeSpectral'})
  results.push({ location: 'balloonRouteNight', phase: 'spectralNight'})
  results.push({ location: 'balloonRouteNight', phase: 'afterSpectral'})
  return results;
}

const pushFiltersManta = (results) => {
  results.push({ location: 'mantaRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'mantaRouteDay', phase: 'spectralDay'})
  results.push({ location: 'mantaRouteDay', phase: 'afterSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectralSnow' });
  results.push({ location: 'northern', phase: 'spectralSunset'})
  results.push({ location: 'northern', phase: 'afterSpectral'})
  results.push({ location: 'bloodbrineSea', phase: 'beforeSpectral'})
  results.push({ location: 'mantaRouteNight', phase: 'spectralNight'})
  results.push({ location: 'bloodbrineSea', phase: 'afterSpectral'})
  return results;
}

const pushFiltersGaladionBay = (filters, results) => {
  if (filters.galadionBayDay || filters.galadionBaySunset || filters.galadionBayNight ) {
    results.push({ location: 'galadionBay', phase: 'beforeSpectral' });
    results.push({ location: 'galadionBay', phase: 'beforeSpectralShowers' });
  }
  if (filters.galadionBayDay) {
    results.push({ location: 'galadionBay', phase: 'spectralDay' });
  }
  if (filters.galadionBaySunset) {
    results.push({ location: 'galadionBay', phase: 'spectralSunset' });
  }
  if (filters.galadionBayNight) {
    results.push({ location: 'galadionBay', phase: 'spectralNight' });
  }
  if (filters.galadionBayDay || filters.galadionBaySunset || filters.galadionBayNight ) {
    results.push({ location: 'galadionBay', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersSouthern = (filters, results) => {
  if (filters.southernDay || filters.southernSunset || filters.southernNight ) {
    results.push({ location: 'southern', phase: 'beforeSpectral' });      
  }
  if (filters.southernDay) {
    results.push({ location: 'southern', phase: 'spectralDay' });
  }
  if (filters.southernSunset) {
    results.push({ location: 'southern', phase: 'spectralSunset' });
  }
  if (filters.southernNight) {
    results.push({ location: 'southern', phase: 'spectralNight' });
  }
  if (filters.southernDay || filters.southernSunset || filters.southernNight ) {
    results.push({ location: 'southern', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersCieldalaes = (filters, results) => {
  if (filters.cieldalaesDay || filters.cieldalaesSunset || filters.cieldalaesNight ) {
    results.push({ location: 'cieldalaes', phase: 'beforeSpectral' });      
  }
  if (filters.cieldalaesDay) {
    results.push({ location: 'cieldalaes', phase: 'spectralDay' });
  }
  if (filters.cieldalaesSunset) {
    results.push({ location: 'cieldalaes', phase: 'spectralSunset' });
  }
  if (filters.cieldalaesNight) {
    results.push({ location: 'cieldalaes', phase: 'spectralNight' });
  }
  if (filters.cieldalaesDay || filters.cieldalaesSunset || filters.cieldalaesNight ) {
    results.push({ location: 'cieldalaes', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersRhotanoSea = (filters, results) => {
  if (filters.rhotanoSeaDay || filters.rhotanoSeaSunset || filters.rhotanoSeaNight ) {
    results.push({ location: 'rhotanoSea', phase: 'beforeSpectral' });      
  }
  if (filters.rhotanoSeaDay) {
    results.push({ location: 'rhotanoSea', phase: 'spectralDay' });
  }
  if (filters.rhotanoSeaSunset) {
    results.push({ location: 'rhotanoSea', phase: 'spectralSunset' });
  }
  if (filters.rhotanoSeaNight) {
    results.push({ location: 'rhotanoSea', phase: 'spectralNight' });
  }
  if (filters.rhotanoSeaDay || filters.rhotanoSeaSunset || filters.rhotanoSeaNight ) {
    results.push({ location: 'rhotanoSea', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersNorthern = (filters, results) => {
  if (filters.northernDay || filters.northernSunset || filters.northernNight ) {
    results.push({ location: 'northern', phase: 'beforeSpectral' });      
  }
  if (filters.northernDay || filters.northernSunset || filters.northernNight ) {
    results.push({ location: 'northern', phase: 'beforeSpectralSnow' });      
  }
  if (filters.northernDay) {
    results.push({ location: 'northern', phase: 'spectralDay' });
  }
  if (filters.northernSunset) {
    results.push({ location: 'northern', phase: 'spectralSunset' });
  }
  if (filters.northernNight) {
    results.push({ location: 'northern', phase: 'spectralNight' });
  }
  if (filters.northernDay || filters.northernSunset || filters.northernNight ) {
    results.push({ location: 'northern', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersRothlytSound = (filters, results) => {
  if (filters.rothlytSoundDay || filters.rothlytSoundSunset || filters.rothlytSoundNight ) {
    results.push({ location: 'rothlytSound', phase: 'beforeSpectral' });      
  }
  if (filters.rothlytSoundDay) {
    results.push({ location: 'rothlytSound', phase: 'spectralDay' });
  }
  if (filters.rothlytSoundSunset) {
    results.push({ location: 'rothlytSound', phase: 'spectralSunset' });
  }
  if (filters.rothlytSoundNight) {
    results.push({ location: 'rothlytSound', phase: 'spectralNight' });
  }
  if (filters.rothlytSoundDay || filters.rothlytSoundSunset || filters.rothlytSoundNight ) {
    results.push({ location: 'rothlytSound', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersBloodbrineSea = (filters, results) => {
  if (filters.bloodbrineSeaDay || filters.bloodbrineSeaSunset || filters.bloodbrineSeaNight ) {
    results.push({ location: 'bloodbrineSea', phase: 'beforeSpectral' });      
  }
  if (filters.bloodbrineSeaDay) {
    results.push({ location: 'bloodbrineSea', phase: 'spectralDay' });
  }
  if (filters.bloodbrineSeaSunset) {
    results.push({ location: 'bloodbrineSea', phase: 'spectralSunset' });
  }
  if (filters.bloodbrineSeaNight) {
    results.push({ location: 'bloodbrineSea', phase: 'spectralNight' });
  }
  if (filters.bloodbrineSeaDay || filters.bloodbrineSeaSunset || filters.bloodbrineSeaNight ) {
    results.push({ location: 'bloodbrineSea', phase: 'afterSpectral' });
  }
  return results;
}

export const getters = {
  getTargetTitles(state) {
    return state.targetTitles;
  },
  getTitleFilterTitles(state) {
    return state.titleFilterTitles;
  },
  getSectionTitles(state) {
    return state.sectionTitles;
  },
  getTypeTitles(state) {
    return state.typeTitles;
  },
  getRouteTitles(state) {
    return state.routeTitles;
  },
  getContent(state) {
    return state.content;
  },
  getLocationFilterTitles(state) {
    return state.locationFilterTitles;
  },
  getStratHeadings(state) {
    return state.stratHeadings;
  },
  getTargetTitleOrder(state) {
    let results = [];
    if (state.filters.jellyRoute) {
      results = pushFiltersJelly(results);
    }
    if (state.filters.seaDragonRoute) {
      results = pushFiltersSeaDragon(results);
    }
    if (state.filters.octopusRoute) {
      results = pushFiltersOctopus(results);
    }
    if (state.filters.sharkRoute) {
      results = pushFiltersShark(results);
    }
    if (state.filters.crabRoute) {
      results = pushFiltersCrab(results);
    }
    if (state.filters.balloonRoute) {
      results = pushFiltersBalloon(results);
    }
    if (state.filters.mantaRoute) {
      results = pushFiltersManta(results);
    }
    return results;
  },
  getRouteLocationOrder(state) {
    return state.routeLocationOrder;
  },
  getLocationTimeOrder(state) {
    let results = [];
    results = pushFiltersGaladionBay(state.filters, results);
    results = pushFiltersSouthern(state.filters, results);
    results = pushFiltersCieldalaes(state.filters, results);
    results = pushFiltersRhotanoSea(state.filters, results);
    results = pushFiltersNorthern(state.filters, results);
    results = pushFiltersRothlytSound(state.filters, results);
    results = pushFiltersBloodbrineSea(state.filters, results);
    
    return results;
  },
  hasLocations(state) {
    return (
      state.filters.galadionBayDay ||
      state.filters.galadionBaySunset ||
      state.filters.galadionBayNight ||
      state.filters.southernDay ||
      state.filters.southernSunset ||
      state.filters.southernNight ||
      state.filters.rhotanoSeaDay ||
      state.filters.rhotanoSeaSunset ||
      state.filters.rhotanoSeaNight ||
      state.filters.northernDay ||
      state.filters.northernSunset ||
      state.filters.northernNight ||
      state.filters.cieldalaesDay ||
      state.filters.cieldalaesSunset ||
      state.filters.cieldalaesNight ||
      state.filters.rothlytSoundDay ||
      state.filters.rothlytSoundSunset ||
      state.filters.rothlytSoundNight ||
      state.filters.bloodbrineSeaDay ||
      state.filters.bloodbrineSeaSunset ||
      state.filters.bloodbrineSeaNight
    );
  }
}

export const mutations = {
  updateFilters(state, filters) {
    state.filters = {...state.filters, ...filters};
  },
  updateCurrentRoute(state, currentRoute) {
    state.currentRoute = currentRoute;
    const resetRouteFilters = {
      rhotanoSeaDaySunsetNightRoute: false,
      rhotanoSeaSunsetNightDayRoute: false,
      rhotanoSeaNightDaySunsetRoute: false,
      northernDaySunsetNightRoute: false,
      northernSunsetNightDayRoute: false,
      northernNightDaySunsetRoute: false,
      rothlytSoundDaySunsetNightRoute: false,
      rothlytSoundSunsetNightDayRoute: false,
      rothlytSoundNightDaySunsetRoute: false,
      bloodbrineSeaDaySunsetNightRoute: false,
      bloodbrineSeaSunsetNightDayRoute: false,
      bloodbrineSeaNightDaySunsetRoute: false      
    };
    switch (currentRoute) {
      case NORTHERN_NIGHT_DAY_SUNSET:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ northernNightDaySunsetRoute: true }};
      break;
      case NORTHERN_DAY_SUNSET_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ northernDaySunsetNightRoute: true }};
      break;
      case NORTHERN_SUNSET_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ northernSunsetNightDayRoute: true }};
      break;
      case RHOTANO_NIGHT_DAY_SUNSET:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rhotanoSeaNightDaySunsetRoute: true }};
      break;
      case RHOTANO_DAY_SUNSET_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rhotanoSeaDaySunsetNightRoute: true }};
      break;
      case RHOTANO_SUNSET_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rhotanoSeaSunsetNightDayRoute: true }};
      break;
      case ROTHLYT_NIGHT_DAY_SUNSET:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rothlytSoundNightDaySunsetRoute: true }};
      break;
      case ROTHLYT_DAY_SUNSET_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rothlytSoundDaySunsetNightRoute: true }};
      break;
      case ROTHLYT_SUNSET_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rothlytSoundSunsetNightDayRoute: true }};
      break;
      case BLOODBRINE_NIGHT_DAY_SUNSET:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ bloodbrineSeaNightDaySunsetRoute: true }};
      break;
      case BLOODBRINE_DAY_SUNSET_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ bloodbrineSeaDaySunsetNightRoute: true }};
      break;
      case BLOODBRINE_SUNSET_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ bloodbrineSeaSunsetNightDayRoute: true }};
      break;
    }
  },
  updateCurrentTitleRoute(state, currentTitleRoute) {
    state.currentTitleRoute = currentTitleRoute;
    const resetRouteFilters = {
      jellyRoute: false,
      seaDragonRoute: false,
      octopusRoute: false,
      sharkRoute: false,
      crabRoute: false,
      balloonRoute: false,
      mantaRoute: false
    };
    switch (currentTitleRoute) {
      case JELLY_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ jellyRoute: true }};
      break;
      case SEA_DRAGON_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ seaDragonRoute: true }};
      break;
      case OCTOPUS_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ octopusRoute: true }};
      break;
      case SHARK_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ sharkRoute: true }};
      break;
      case CRAB_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ crabRoute: true }};
      break;
      case BALLOON_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ balloonRoute: true }};
      break;
      case MANTA_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ mantaRoute: true }};
      break;
    }
  }
}