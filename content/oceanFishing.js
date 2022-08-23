export const sectionTitles = {
  target: 'Target',
  type: 'Display Type',
  route: 'Routes',
  location: 'Locations',
  strat: 'Bait & Strategies'
};

export const titleFilterTitles = {
  jelly: 'Jelled Together<br/>Rhotano&nbsp;Sea<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night',
  seaDragon: 'Maritime Dragonslayers<br/>Northern&nbsp;Strait<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Sunset',
  octopus: 'Octopus Travelers<br/>Northern&nbsp;Strait<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night',
  shark: 'Certifiable Shark Hunters<br/>Rhotano&nbsp;Sea<br/>Sunset&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day)',
  crab: 'Crab Boat Crew<br/>Bloodbrine&nbsp;Sea<br/>Sunset&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day',
  balloon: 'Balloon Catchers<br/>Rothlyt&nbsp;Sound<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night',
  manta: 'Sticking it to the Manta<br/>Bloodbrine&nbsp;Sea<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night'
};

export const targetTitles = {
  fish: 'Fish',
  title: 'Title'
};

export const typeTitles = {
  route: 'Per Route',
  location: 'Per Location'
};

export const routeTitles = [
  'Northern&nbsp;Strait of Merlthor<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Sunset<br/>Coral Manta',
  'Northern&nbsp;Strait of Merlthor<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night',
  'Northern&nbsp;Strait of Merlthor<br/>Sunset&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>Sothis',
  'Rhotano&nbsp;Sea<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Sunset<br />Stonescale',
  'Rhotano&nbsp;Sea<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night',
  'Rhotano&nbsp;Sea<br/>Sunset&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>Coral Manta',
  'Rothlyt&nbsp;Sound<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Sunset<br/>Hafgufa + Placodus',
  'Rothlyt&nbsp;Sound<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night<br/>Stonescale',
  'Rothlyt&nbsp;Sound<br/>Sunset&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>',
  'Bloodbrine&nbsp;Sea<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Sunset<br/>Hafgufa + Elasmosaurus',
  'Bloodbrine&nbsp;Sea<br/>Day&nbsp;>&nbsp;Sunset&nbsp;>&nbsp;Night',
  'Bloodbrine&nbsp;Sea<br/>Sunset&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>Seafaring Toad'
];

export const locationFilterTitles = {
  galadionBay: {
    day: 'Galadion&nbsp;Bay (Day)',
    Sunset: 'Galadion&nbsp;Bay (Sunset)',
    night: 'Galadion&nbsp;Bay (Night)'
  },
  southern: {
    day: 'Southern&nbsp;Strait of Merlthor (Day)',
    Sunset: 'Southern&nbsp;Strait of Merlthor (Sunset)',
    night: 'Southern&nbsp;Strait of Merlthor (Night)'
  },
  rhotanoSea: {
    day: 'Rhotano&nbsp;Sea (Day)',
    Sunset: 'Rhotano&nbsp;Sea (Sunset)',
    night: 'Rhotano&nbsp;Sea (Night)'
  },
  northern: {
    day: 'Northern&nbsp;Strait of Merlthor (Day)',
    Sunset: 'Northern&nbsp;Strait of Merlthor (Sunset)',
    night: 'Northern&nbsp;Strait of Merlthor (Night)'
  },
  cieldalaes: {
    day: 'Cieldalaes (Day)',
    Sunset: 'Cieldalaes (Sunset)',
    night: 'Cieldalaes (Night)'
  },
  rothlytSound: {
    day: 'Rothlyt&nbsp;Sound (Day)',
    Sunset: 'Rothlyt&nbsp;Sound (Sunset)',
    night: 'Rothlyt&nbsp;Sound (Night)'
  },
  bloodbrineSea: {
    day: 'Bloodbrine&nbsp;Sea (Day)',
    Sunset: 'Bloodbrine&nbsp;Sea (Sunset)',
    night: 'Bloodbrine&nbsp;Sea (Night)'
  }
};

export const stratHeadings = {
  location: 'Location',
  phase: 'Phase',
  weather: 'Weather',
  time: 'Time',
  conditions: 'Conditions',
  bait: 'Bait',
  strat: 'Strategy',
  doublehook: 'Double Hook Priority'
};

export const content = {
  galadionBay: {
    location: 'Galadion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Megalodon(!!!)</em> >&nbsp;18s',
        'Surface&nbsp;Slap <em>Tarnished&nbsp;Shark(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    beforeSpectralShowers: {
      phase: 'Before Spectral',
      weather: 'Showers',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Spectral&nbsp;Megalodon(!!!)</em>'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Casket&nbsp;Oyster(!)</em>',
        '<em>Ragworm => Nimble&nbsp;Dancer(!)</em>'
      ],
      doublehook: [
        '<em>Casket Oyster(!)x2</em> 6-12s [Blind]',
        '<em>Nimble Dancer(!)x2</em> 10-18s [Blind]',
      ] 
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Funnel&nbsp;Shark(!!!)</em>',
        '<em>Plump&nbsp;Worm => Quicksilver&nbsp;Blade(!!!)</em>',
        '<em>Plump&nbsp;Worm => Ghost Shark(!!)</em>'
      ],
      doublehook: [
        '<em>Funnel Shark(!!!)x4</em> 5-10s',
        '<em>Quicksilver Blade(!!)x2</em> 3-7s',
        '<em>Ghost Shark(!!)x4</em> 2-7s',
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill, Glowworm', 
      strategy: [
        '<em>Krill => Navigator\'s&nbsp;Print(!)</em> + <em>Glowworm => Heavenskey(!)</em> twice',
        'Intuition: <strong>Glowworm => Sothis(!!!)</strong>',
        '<em>Krill => Merman\'s Mane(!!)</em>'
      ],
      doublehook: [
        '<em>Merman\'s Mane(!!)x4</em> 2-6s'
      ]  
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill', 
      strategy: [
        '<em>Krill => Galadion&nbsp;Chovy(!)</em> three times',
        'Intuition: <strong>Krill => Drunkfish(!!!)</strong>',
        '<em>Krill => Cyan&nbsp;Octopus(!!)</em>'
      ],
      doublehook: [
        '<em>Cyan Octopus(!!)x4</em> 15-29s [No iso]'
      ]
    }
  },
  southern: {
    location: 'Southern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Discus(!!!)</em> >&nbsp;18s',
        'Surface&nbsp;Slap <em>Momora&nbsp;Mora(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Mythril&nbsp;Sovereign(!!)</em>',
        '<em>Krill => Hi-Aetherlouse(!) => Great Grandmarlin(!!!)</em>'
      ],
      doublehook: [
        '<em>Mythril&nbsp;Sovereign(!!)x2</em> 6-8s',
        '<em>Great Grandmarlin(!!!)x2</em> 2-3s',
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Ragworm', 
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!) => Rougesaurus(!!!)</em>',
        '<em>Ragworm => Sea Nettle(!)</em>',
        '<em>Ragworm => Hi-Aetherlouse(!) => Great Grandmarlin(!!!)</em>',
      ],
      doublehook: [
        '<em>Roguesaurus(!!)x2</em> 2-6s',
        '<em>Sea Nettle(!)x4</em> 4-9s',
        '<em>Great Grandmarlin(!!!)x2</em> 2-3s',
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm, Shrimp Cage Feeder',
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!) => Great&nbsp;Grandmarlyn(!!)</em> twice',
        'Intuition: <strong>Shrimp&nbsp;Cage&nbsp;Feeder => Coral&nbsp;Manta(!!!)</strong>',
        '<em>Ragworm => Hi-Aetherlouse(!) => Aetheric&nbsp;Seadragon(!!)</em>'
      ],
      doublehook: [
        '<em>Aetheric&nbsp;Seadragon(!!)x2</em> 2-6s',
        '<em>Great Grandmarlin(!!!)x2</em> 2-3s',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill, Plump&nbsp;Worm, Ragworm',
      strategy: [
        '<em>Krill => Ghoul&nbsp;Barracuda(!!) => Gladdius(!!)</em>',
        'Intuition: <strong>Plump&nbsp;Worm => Little&nbsp;Leviathan(!!!)</strong>',
        '<em>Ragworm => Shaggy&nbsp;Seadragon(!)</em>'
      ],
      doublehook: [
        '<em>Shaggy Seadragon(!)x4</em> 7-22s [Blind >7s]'
      ]
    }
  },
  rhotanoSea: {
    location: 'Rhotano Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [        
        '<em>Plump&nbsp;Worm => Spectral&nbsp;Bass(!!!)</em> >&nbsp;18s',
        'Surface&nbsp;Slap <em>Chrome&nbsp;Hammerhead(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm, Ragworm',
      strategy: [
        '<em>Plump&nbsp;Worm => Executioner(!!!)</em>',
        '<em>Plump&nbsp;Worm => Sweeper(!!)</em>',
        '<em>Ragworm => Silencer(!)</em>',
      ],
      doublehook: [
        '<em>Executioner(!!!)x4</em> 4-10s [Blind >4s]',
        '<em>Sweeper(!!)x2</em> 3-8s',
        '<em>Silencer(!)x4</em> 2-8s'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Ragworm, Rat&nbsp;Tail',
      strategy: [
        '<em>Ragworm => Silencer(!)</em> + <em>Rat&nbsp;Tail => Deep&nbsp;Sea&nbsp;Eel(!!)</em>',
        'Intuition: <strong>Rat&nbsp;Tail => Stonescale(!!!)</strong>'
      ],
      doublehook: [
        '<em>Silencer(!)x4</em> 2-8s'
      ]
    },      
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill, Ragworm',
      strategy: [
        '<em>Krill => Floating&nbsp;Saucer(!)</em>',
        '<em>Ragworm => Slipsnail(!)</em>',
        '<em>Ragworm => Silencer(!)</em>'
      ],
      doublehook: [
        '<em>Floating Saucer(!)x4</em> 6-11s [Blind]',
        '<em>Slipsnail(!)x2</em> 3-8s',
        '<em>Silencer(!)x4</em> 2-8s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm, Krill',
      strategy: [
        '<em>Plump&nbsp;Worm => Crimson&nbsp;Monkfish(!!)</em> twice',
        'Intuition: <strong>Krill => Sabaton(!!!)</strong>',
        '<em>Plump&nbsp;Worm => Chrome&nbsp;Hammerhead(!!!)</em>'
      ],
      doublehook: [
        '<em>Crimson Monkfish(!!)x4</em> 3-18s',
        '<em>Chrome Hammerhead(!!!)x4</em> 14-33s'
      ]
    }
  },
  northern: {
    location: 'Northern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em> >&nbsp;18s',
        'Surface&nbsp;Slap <em>Megasquid(!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    beforeSpectralSnow: {
      phase: 'Before Spectral',
      weather: 'Snow/Blizzard',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em> >&nbsp;18s',
        'Surface&nbsp;Slap <em>Orchon\'s&nbsp;Stone&nbsp;(!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm, Heavy&nbsp;Steel&nbsp;Jig',
      strategy: [
        '<em>Plump&nbsp;Worm => Gugrusaurus(!!!)</em> three times',
        'Intuition: <strong>Heavy&nbsp;Steel&nbsp;Jig => Elasmosaurus(!!!)</strong>',
      ],
      doublehook: [
        '<em>Gugrusaurus(!!!)x4</em> 2-10s',
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Ragworm, Krill, Plump&nbsp;Worm',
      strategy: [
        '<em>Ragworm => Coral&nbsp;Seadragon(!)</em>',
        '<em>Krill => The Fallen One(!!)</em>',
        '<em>Plump&nbsp;Worm => Gugrusaurus(!!!)</em>',
      ],
      doublehook: [
        '<em>Coral Seadragon(!)x4</em> 5-12s [Blind]',
        '<em>The Fallen One(!!)x2</em> 6-9s',
        '<em>Gugrusaurus(!!!)x4</em> 2-10s',
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Bartholomew the Chopper(!)</em>',
        '<em>Krill => Mopbeard(!!)</em>'
      ],
      doublehook: [
        '<em>Bartholomew the Chopper(!)x4</em> 3-5s',
        '<em>Mopbeard(!!)x4</em> 4-9s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Tossed&nbsp;Dagger(!) => Elder&nbsp;Dinicthys(!!)</em>',
        'Intuition: <strong>Ragworm => Shooting&nbsp;Star(!!!)</strong>',

      ],
      doublehook: [
        '<em>Elder Dinicthys(!!)x2</em> 9-16s [No-iso]'
      ]
    }
  },
  cieldalaes: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em> >&nbsp;10s &amp; <&nbsp;18s',
        'Surface&nbsp;Slap <em>King&nbsp;Cobrafish(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Callichthyid(!!!)</em>',
        '<em>Plump&nbsp;Worm => Jetborne&nbsp;Manta(!!!)</em>',
        '<em>Krill => Devil\'s Sting(!!)</em>'
      ],
      doublehook: [
        '<em>Devil\'s Sting(!!)x2</em> 5-10s',
        '<em>Callichthyid(!!!)x2</em> 4-6s',
        '<em>Titanshell Crab(!!)x4</em> 2-3s',
        '<em>Jetborne Manta(!!!)x4</em> 2-3s',
        '<em>Mythril Boxfish(!)x4</em> 2-5s'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Plump&nbsp;Worm, Krill',
      strategy: [
        '<em>Plump&nbsp;Worm => Meandering&nbsp;Mora(!!)</em>',
        '<em>Plump&nbsp;Worm => Jetborne Manta(!!!)</em>',
        '<em>Krill => Flaming Eel(!!)</em>',
        '<em>Krill => Titanshell Crab(!!)</em>',
      ],
      doublehook: [
        '<em>Meandering Mora(!!)x2</em> 6-12s [Blind]',
        '<em>Flaming Eel(!!)x2</em> 6-7s',
        '<em>Titanshell Crab(!!)x4</em> 2-3s',
        '<em>Jetborne Manta(!!!)x4</em> 2-3s [Blind]',
        '<em>Mythril Boxfish(!)x4</em> 2-5s'
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Plump&nbsp;Worm, Krill, Squid&nbsp;Strip',
      strategy: [
        '<em>Plump&nbsp;Worm => Jetborn&nbsp;Manta(!!!)</em> twice + <em>Krill => Mistbeard\'s&nbsp;Cup(!!)</em>',
        'Intuition: <strong>Squid&nbsp;Strip => Hafgufa(!!!)</strong>',
        '<em>Krill => Titanshell Crab(!!)</em>',
      ],
      doublehook: [
        '<em>Titanshell Crab(!!)x4</em> 2-3s',
        '<em>Jetborne Manta(!!!)x4</em> 2-3s [Blind]',
        '<em>Mythril Boxfish(!)x4</em> 2-5s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Metalic&nbsp;Boxfish(!)</em> three times',
        '<strong>Krill => Cieldalaes&nbsp;Geode(!!!)</strong>',
        '<em>Ragworm => Mamahi-mahi(!!!)</em>'
      ],
      doublehook: [
        '<em>Mamahi-mahi(!!!)x2</em> 17-28s [Blind]'
      ]
    }
  },
  rothlytSound: {
    location: 'Rothlyt Sound',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Spectresaur(!!!)</em> >&nbsp;14s',
        'Surface&nbsp;Slap <em>Thavnairian&nbsp;Shark(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Pearl&nbsp;Bombfish(!!)</em>',
        '<em>Krill => Knifejaw(!!)</em>',
        '<em>Plump&nbsp;Worm => Panoptes(!!)</em>'
      ],
      doublehook: [
        '<em>Pearl Bombfish(!!)x4</em> 3-6s [Blind]',
        '<em>Knife Jaw(!!)x2</em> 6-9s [Blind]',
        '<em>Panoptes(!!)x4</em> 3-6s [Blind]',
        '<em>Garum Jug(!)x4</em> 2-3s',
        '<em>Trollfish(!)x2</em> 2-6s'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Rothlyt&nbsp;Mussel(!!!) => Trollfish(!)</em>',
        'Intuition: <strong>Ragworm => Placodus(!!!)</strong>',
        '<em>Krill => Knifejaw(!!)</em>',
      ],
      doublehook: [
        '<em>Knife Jaw(!!)x2</em> 6-8s [Blind]',
        '<em>Trollfish(!)x2</em> 2-6s'
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Pearl&nbsp;Bombfish(!!)</em>',
        '<em>Krill => Knifejaw(!!)</em>'
      ],
      doublehook: [
        '<em>Pearl Bombfish(!!)x4</em> 3-6s [Blind]',
        '<em>Knife Jaw(!!)x2</em> 6-8s [Blind]',
        '<em>Garum Jug(!)x4</em> 2-3s',
        '<em>Trollfish(!)x2</em> 2-6s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Rothlyt&nbsp;Kelp(!)</em> three times',
        'Intuition: <strong>Ragworm => Ginkgo&nbsp;Fin(!!!)</strong>',
        '<em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
      ],
      doublehook: [
        '<em>Honeycomb Fish(!)x4 </em> 12-23s [Blind >12s]'
      ]
    }
  },
  bloodbrineSea: {
    location: 'Bloodbrine Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Eel(!!!)</em> >&nbsp;14s',
        'Surface&nbsp;Slap <em>True&nbsp;Scad(!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Krill, Pillbug, Ragworm',
      strategy: [
        '<em>Krill => Beatific&nbsp;Vision(!!)</em> three times',
        'Intuition: <strong>Pillbug => Seafaring&nbsp;Toad(!!!)</strong>',
        '<em>Ragworm => Exterminator(!)</em>',
        '<em>Krill => Beatific&nbsp;Vision(!!)</em>',
      ],
      doublehook: [
        '<em>Exterminator(!)x4</em> 6-7s [Blind]',
        '<em>Quartz Hammerhead(!!!)x2</em> 7-8s [Blind]',
        '<em>Oracular Crab(!)x4</em> 2-3s',
        '<em>Beatific Vision(!!)x4</em> 1-2s'
      ]
    },    
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Quartz&nbsp;Hammerhead(!!!)</em>',
        '<em>Krill => Beatific&nbsp;Vision(!!)</em>',
      ],
      doublehook: [
        '<em>Quartz Hammerhead(!!!)x2</em> 6-8s [Blind]',
        '<em>Beatific Vision(!!)x4</em> 2-3s',
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Beatific&nbsp;Vision(!!)</em>',
        '<em>Krill => Skaldminni(!!)</em>',
      ],
      doublehook: [
        '<em>Quartz Hammerhead(!!!)x2</em> 6-8s',
        '<em>Skaldminni(!!)x4</em> 2-7s',
        '<em>Beatific Vision(!!)x4</em> 2-3s',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Sunken&nbsp;Mask(!!!)</em>',
        'Intuition: <strong>Krill => Bareface(!!!)</strong>'
      ],
      doublehook: [
        '<em>Sunken Mask (!!!)x2 </em> 16-20s [Blind >16s]'
      ]
    }
  },
  jellyRouteSunset: {
    location: 'Southern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => La&nbsp;Noscean&nbsp;Jelly(!)</em>',
        'Rely others to Spectral <em>Krill => Spectral&nbsp;Discus(!!!)</em>'
      ],
      doublehook: [
        '<em>La Noscean Jelly(!)x4</em> 2-7s'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Sea&nbsp;Nettle(!)</em>'
      ],
      doublehook: [
        '<em>Sea Nettle(!)x4</em> 4-9s [Blind]'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => La&nbsp;Noscean&nbsp;Jelly(!)</em>'
      ],
      doublehook: [
        '<em>La Noscean Jelly(!)x4</em> 2-7s'
      ]
    }
  },
  jellyRouteNight: {
    location: 'Rhotano Sea',
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Floating&nbsp;Saucer(!)</em>'
      ],
      doublehook: [
        '<em>Floating Saucer(!)x4</em> 6-11s'
      ]
    }
  },
  seaDragonRouteNight: {
    location: 'Southern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Shaggy&nbsp;Seadragon(!)</em>',
        'Rely others to Spectral <em>Krill => Spectral&nbsp;Megalodon(!!!)</em>'
      ],
      doublehook: [
        '<em>Shaggy Seadragon(!)x4</em> 7-22s [Blind >7s]'
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!) => Aetheric&nbsp;Seadragon(!!)</em>'
      ],
      doublehook: [
        '<em>Aetheric Seadragon(!!)x2</em> 2-6s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Shaggy&nbsp;Seadragon(!)</em>'
      ],
      doublehook: [
        '<em>Shaggy Seadragon(!)x4</em> 7-22s [Blind >7s]'
      ]
    }
  },
  seaDragonRouteSunset: {
    location: 'Northrn Strait of Merlthor',
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Coral&nbsp;Seadragon(!)</em>'
      ],
      doublehook: [
        '<em>Coral Seadragon(!)x4</em> 5-12s [Blind >8s]'
      ]
    }
  },
  octopusRouteSunset: {
    location: 'Galadion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Showers (or Normal)',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Cyan&nbsp;Octopus(!!)</em>'
      ],
      doublehook: [
        '<em>Cyan Octopus(!!)x4</em> 15-29s [No iso]'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Merman\'s&nbsp;Mane(!!)</em>'
      ],
      doublehook: [
        '<em>Merman\'s Mane(!!)x4</em> 2-6s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Cyan&nbsp;Octopus(!!)</em>'
      ],
      doublehook: [
        '<em>Cyan Octopus(!!)x4</em> 15-29s [No iso]'
      ]
    }
  },
  octopusRouteNight: {
    location: 'Northern Strait of Merlthor',
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Mopbeard(!!)</em>'
      ],
      doublehook: [
        '<em>Mopbeard(!!)x4</em> 4-9s [Blind >5s]',
      ]
    }
  },
  sharkRouteSunset: {
    location: 'Galadion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Tarnished&nbsp;Shark(!!!)</em>',
        'You are relying on others to proc Spectral with <em>Krill => Spectral&nbsp;Megalodon(!!!)</em>'
      ],
      doublehook: [
        '<em>Tarnished Shark(!!!)x2</em> 12-36s'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Funnel&nbsp;Shark(!!!)</em>',
        '<em>Plump&nbsp;Worm => Ghost&nbsp;Shark(!!)</em>'
      ],
      doublehook: [
        '<em>Funnel Shark(!!!)x4</em> 5-10s [Blind >5s]',
        '<em>Ghost Shark(!!)x4</em> 2-7s',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Tarnished&nbsp;Shark(!!!)</em>'
      ],
      doublehook: [
        '<em>Tarnished Shark(!!!)x2</em> 12-36s [Blind >12s]'
      ]
    }
  },
  sharkRouteDay: {
    location: 'Rhotano Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Chrome&nbsp;Hammerhead(!!!)</em>'
      ],
      doublehook: [
        '<em>Chrome Hammerhead(!!!)x4</em> 14-33s'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Executioner(!!!)</em>',
        '<em>Plump&nbsp;Worm => Sweeper(!!)</em>'
      ],
      doublehook: [
        '<em>Executioner(!!!)x4</em> 4-10s [Blind >4s]',
        '<em>Sweeper(!!)x2</em> 3-8s',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Chrome&nbsp;Hammerhead(!!!)</em>'
      ],
      doublehook: [
        '<em>Chrome Hammerhead(!!!)x4</em> 14-33s [Blind >14s]'
      ]
    }
  },
  crabRouteSunset: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Tortoiseshell&nbsp;Crab(!!)</em>',
        'Relying others to Spectral <em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em>'
      ],
      doublehook: [
        '<em>Tortoiseshell Crab(!!)x2</em> 5-15s'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Titanshell&nbsp;Crab(!!)</em>'
      ],
      doublehook: [
        '<em>Titanshell Crab(!!)x4</em> 2-3s [Blind]'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Tortoiseshell&nbsp;Crab(!!)</em>'
      ],
      doublehook: [
        '<em>Tortoiseshell Crab(!!)x2</em> 5-15s'
      ]
    }
  },
  crabRouteNight: {
    location: 'Northern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Net&nbsp;Crawler(!!)</em>'
      ],
      doublehook: [
        '<em>Net Crawler(!!)x2</em> 8-16s [No-iso]'
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Bartholomew&nbsp;the&nsbp;Chopper(!)</em>',
        'Rely others to Spectral <em>Krill => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em>'
      ],
      doublehook: [
        '<em>Bartholomew the Chopper(!)x4</em> 3-8s',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Net&nbsp;Crawler(!!)</em>'
      ],
      doublehook: [
        '<em>Net Crawler(!!)x2</em> 8-16s [No-iso]'
      ]
    }
  },
  crabRouteDay: {
    location: 'Bloodbrine Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Thaliak&nbsp;Crab(!)</em>',
        '<em>Ragworm => Bloodpolish&nbsp;Crab(!)</em>',
        'You are relying on others to proc Spectral with <em>Krill => Spectral&nbsp;Eel(!!!)</em>'
      ],
      doublehook: [
        '<em>Thaliak Crab(!)x2</em> 3-8s',
        '<em>Bloodpolish Crab(!)x4</em> 14-28s'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Oracular&nbsp;Crab(!)</em> or <em>Ragworm => Exterminator(!)</em>'
      ],
      doublehook: [
        '<em>Oracular Crab(!)x4</em> 2-3s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Thaliak&nbsp;Crab(!)</em>',
        '<em>Ragworm => Bloodpolish&nbsp;Crab(!)</em>'
      ],
      doublehook: [
        '<em>Thaliak Crab(!)x2</em> 3-8s',
        '<em>Bloodpolish Crab(!)x4</em> 14-28s'
      ]
    }
  },
  balloonRouteDay: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Thunderstorms,<br /><em>Normal</em>',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Metallic&nbsp;Boxfish(!)</em>'
      ],
      doublehook: [
        '<em>Metallic Boxfish(!)x2</em> 5-12s [Blind]'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Mythril&nbsp;Boxfish(!)</em>'
      ],
      doublehook: [
        '<em>Mythril Boxfish(!)x4</em> 2-5s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Metallic&nbsp;Boxfish(!)</em>'
      ],
      doublehook: [
        '<em>Metallic Boxfish(!)x2</em> 5-12s [Blind]'
      ]
    }
  },
  balloonRouteSunset: {
    location: 'Rhotano Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Lampfish(!)</em>',
        'Surface&nbsp;Slap <em>Rhotano&nbsp;Sardine(!)</em>',
        'Rely others to Spectral <em>Plump&nbsp;Worm => Spectral&nbsp;Bass(!!!)</em>'
      ],
      doublehook: [
        '<em>Lampfish(!)x2</em> 9-16s [Blind >9s]'
      ]
    },
    spectralSunset: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Sunset',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Silencer(!)</em>'
      ],
      doublehook: [
        '<em>Silencer(!)x4</em> 2-8s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;9s <em>Ragworm => Lampfish(!)</em>'
      ],
      doublehook: [
        '<em>Lampfish(!)x2</em> 9-16s [Blind >9s]'
      ]
    }
  },
  balloonRouteNight: {
    location: 'Rothlyt Sound',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
      ],
      doublehook: [
        '<em>Honeycomb Fish(!)x4 </em> 12-23s [Blind >12s]'
      ]
    },
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Pearl&nbsp;Bombfish(!!)</em>'
      ],
      doublehook: [
        '<em>Pearl Bombfish(!!)x4</em> 3-6s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
      ],
      doublehook: [
        '<em>Honeycomb Fish(!)x4 </em> 12-23s [Blind >12s]'
      ]
    }
  },
  mantaRouteDay: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Goobbue&nbsp;Ray(!!)</em>',
        'Rely others to Spectral <em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em>'
      ],
      doublehook: [
        '<em>Goobbue Ray(!!)x2</em> 14-23s [Blind]'
      ]
    },
    spectralDay: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Jetborne&nbsp;Manta(!!!)</em>'
      ],
      doublehook: [
        '<em>Jetborne Manta(!!!)x4</em> 2-3s [Blind]',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Goobbue&nbsp;Ray(!!)</em>'
      ],
      doublehook: [
        '<em>Goobbue Ray(!!)x2</em> 14-23s [Blind]'
      ]
    }
  },
  mantaRouteNight: {
    location: 'Bloodbrine&nbsp;Sea',
    spectralNight: {
      phase: '<strong>Spectral</strong>',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;6s <em>Krill => Skaldminni(!!)</em>'
      ],
      doublehook: [
        '<em>Skaldminni(!!)x4</em> 2-7s'
      ]
    }
  }
};
