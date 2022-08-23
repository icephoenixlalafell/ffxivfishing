import { content, leveHeadings, sectionTitles } from '../content/levequests';

export const state = () => (
  {
    filters: {
      arr: false,
      hw: false,
      sb: false,
      shb: false,
      level1: false,
      level5: false,
      level10: false,
      level15: false,
      level20: false,
      level25: false,
      level30: false,
      level35: false,
      level40: false,
      level45: false,
      level50: false,
      level52: false,
      level54: false,
      level56: false,
      level58: false,
      level60: false,
      level62: false,
      level64: false,
      level66: false,
      level68: false,
      level70: false,
      level72: false,
      level74: false,
      level76: false,
      level78: false
    },
    content,
    leveHeadings,
    sectionTitles
  }
);

export const getters = {
  getLeveHeadings(state) {
    return state.leveHeadings;
  },
  getSectionTitles(state) {
    return state.sectionTitles;
  },
  getLevequestARROrder(state) {
    let results = []
    if (state.filters.arr && state.filters.level1) {
      results.push({ levequest: 'adventurersRelish', expac: 'arr' });
      results.push({ levequest: 'soupToGuts', expac: 'arr' });
      results.push({ levequest: 'aKelpingHand', expac: 'arr' });
      results.push({ levequest: 'poorBoysEatWell', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level5) {
      results.push({ levequest: 'cloudCutlet', expac: 'arr' });
      results.push({ levequest: 'theyTasteJustAsPretty', expac: 'arr' });
      results.push({ levequest: 'splendorInTheGrass', expac: 'arr' });
      results.push({ levequest: 'yummyInTheTummy', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level10) {
      results.push({ levequest: 'fishByManyOtherNames', expac: 'arr' });
      results.push({ levequest: 'justAddWater', expac: 'arr' });
      results.push({ levequest: 'theFertileIncandescent', expac: 'arr' });
      results.push({ levequest: 'brainCandy', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level15) {
      results.push({ levequest: 'theDeepestCut', expac: 'arr' });
      results.push({ levequest: 'shellGameFisher', expac: 'arr' });
      results.push({ levequest: 'theMoralOfTheCoral', expac: 'arr' });
      results.push({ levequest: 'crabLifeByTheHorns', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level20) {
      results.push({ levequest: 'soundsFishyToMe', expac: 'arr' });
      results.push({ levequest: 'theLongAndTheShortcrust', expac: 'arr' });
      results.push({ levequest: 'blindAmbition', expac: 'arr' });
      results.push({ levequest: 'foodChainReaction', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level25) {
      results.push({ levequest: 'aShockingSoiree', expac: 'arr' });
      results.push({ levequest: 'aWateryWebOfLies', expac: 'arr' });
      results.push({ levequest: 'theTruthWillSetYouFree', expac: 'arr' });
      results.push({ levequest: 'fishing101', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level30) {
      results.push({ levequest: 'aRecipeForDisaster', expac: 'arr' });
      results.push({ levequest: 'justCallMeLateForDinner', expac: 'arr' });
      results.push({ levequest: 'theBluePeriod', expac: 'arr' });
      results.push({ levequest: 'kitchenNightmaresNoMore', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level35) {
      results.push({ levequest: 'thePerksOfPolitics', expac: 'arr' });
      results.push({ levequest: 'handsOffOurFish', expac: 'arr' });
      results.push({ levequest: 'fryMeARiver', expac: 'arr' });
      results.push({ levequest: 'gatheringLight', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level40) {
      results.push({ levequest: 'empireBuilder', expac: 'arr' });
      results.push({ levequest: 'lairdOfTheLakes', expac: 'arr' });
      results.push({ levequest: 'makeAFish', expac: 'arr' });
      results.push({ levequest: 'rationallySpeaking', expac: 'arr' });
    }
    if (state.filters.arr && state.filters.level45) {
      results.push({ levequest: 'awashInEvidence', expac: 'arr' });
      results.push({ levequest: 'puttingTheZapOnNature', expac: 'arr' });
      results.push({ levequest: 'snailFail', expac: 'arr' });
      results.push({ levequest: 'sleeperCreeper', expac: 'arr' });
    }
    return results;
  },
  getLevequestHeavenswardOrder(state) {
    let results = [];
    if (state.filters.hw && state.filters.level50) {
      results.push({ levequest: 'theVoiceOfTheFury', expac: 'hw' });
      results.push({ levequest: 'aWholeLotOfNopeL', expac: 'hw' });
      results.push({ levequest: 'pleaseHaloneTellMeImStillAsleep', expac: 'hw' });
      results.push({ levequest: 'snippedForSpiritualityL', expac: 'hw' });
      results.push({ levequest: 'dineOrSpine', expac: 'hw' });
      results.push({ levequest: 'lurchinFromUrchinsL', expac: 'hw' });
    }
    if (state.filters.hw && state.filters.level52) {
      results.push({ levequest: 'fishOilsAndForgottenSpoils', expac: 'hw' });
      results.push({ levequest: 'valuingTheVintageL', expac: 'hw' });
      results.push({ levequest: 'looseLipsHealBrokenHips', expac: 'hw' });
      results.push({ levequest: 'prayerAndPrejudiceL', expac: 'hw' });
      results.push({ levequest: 'bountyOfSkyBountyOfEarth', expac: 'hw' });
      results.push({ levequest: 'eatingLikeTheNativesL', expac: 'hw' });
    }
    if (state.filters.hw && state.filters.level54) {
      results.push({ levequest: 'analysisOfParalysis', expac: 'hw' });
      results.push({ levequest: 'sendingAFeelingToMySpineL', expac: 'hw' });
      results.push({ levequest: 'theAquariumsOfIshgard', expac: 'hw' });
      results.push({ levequest: 'aWinWinSituationL', expac: 'hw' });
      results.push({ levequest: 'bearingOfTheBlue', expac: 'hw' });
      results.push({ levequest: 'blueOfSkyAndSeaL', expac: 'hw' });
    }
    if (state.filters.hw && state.filters.level56) {
      results.push({ levequest: 'diningWithDravanians', expac: 'hw' });
      results.push({ levequest: 'hundredFinsForAHundredWingsL', expac: 'hw' });
      results.push({ levequest: 'soloOutTheBolo', expac: 'hw' });
      results.push({ levequest: 'suckingOnFaceL', expac: 'hw' });
      results.push({ levequest: 'pipiraPirouette', expac: 'hw' });
      results.push({ levequest: 'plusOneOrTwoOrThreeL', expac: 'hw' });
    }
    if (state.filters.hw && state.filters.level58) {
      results.push({ levequest: 'spewForthAndSpawn', expac: 'hw' });
      results.push({ levequest: 'unleashTheHydroCannonsL', expac: 'hw' });
      results.push({ levequest: 'theyCallItTheKissingDisease', expac: 'hw' });
      results.push({ levequest: 'anglingForAilmentsL', expac: 'hw' });
      results.push({ levequest: 'warmerThanWine', expac: 'hw' });
      results.push({ levequest: 'whatDoesNotBreakUsDevoursUsL', expac: 'hw' });
    }
    return results;
  },
  getLevequestStormbloodOrder(state) {
    let results = [];
    if (state.filters.sb && state.filters.level60) {
      results.push({ levequest: 'slowWashRapidsJumper', expac: 'sb' });
      results.push({ levequest: 'ifALeafFallsInTheWater', expac: 'sb' });
      results.push({ levequest: 'thereCanBeOnlyOne', expac: 'sb' });
    }
    if (state.filters.sb && state.filters.level62) {
      results.push({ levequest: 'lighterWallets', expac: 'sb' });
      results.push({ levequest: 'inAPickle', expac: 'sb' });
      results.push({ levequest: 'perhapsNoSoCommon', expac: 'sb' });
    }
    if (state.filters.sb && state.filters.level64) {
      results.push({ levequest: 'catfishScheme', expac: 'sb' });
      results.push({ levequest: 'curtainsForPleco', expac: 'sb' });
      results.push({ levequest: 'maroonedMinnow', expac: 'sb' });
    }
    if (state.filters.sb && state.filters.level66) {
      results.push({ levequest: 'peculiarDelight', expac: 'sb' });
      results.push({ levequest: 'stepBySteppe', expac: 'sb' });
      results.push({ levequest: 'unbeliebubble', expac: 'sb' });
    }
    if (state.filters.sb && state.filters.level68) {
      results.push({ levequest: 'bloodInTheWater', expac: 'sb' });
      results.push({ levequest: 'toTheTeeth', expac: 'sb' });
      results.push({ levequest: 'preOctopied', expac: 'sb' });
    }
    return results;
  },
  getLevequestShadowbringersOrder(state) {
    let results = [];
    if (state.filters.shb && state.filters.level70) {
      results.push({ levequest: 'ecoWarriorOfLight', expac: 'shb' });
      results.push({ levequest: 'needsMoreEgg', expac: 'shb' });
      results.push({ levequest: 'theSourceOfTheProblem', expac: 'shb' });
    }
    if (state.filters.shb && state.filters.level72) {
      results.push({ levequest: 'jellySalad', expac: 'shb' });
      results.push({ levequest: 'fullOfFish', expac: 'shb' });
      results.push({ levequest: 'aetherquake', expac: 'shb' });
    }
    if (state.filters.shb && state.filters.level74) {
      results.push({ levequest: 'faerieFish', expac: 'shb' });
      results.push({ levequest: 'theBrideAquatic', expac: 'shb' });
      results.push({ levequest: 'aCherryRedHerring', expac: 'shb' });
    }
    if (state.filters.shb && state.filters.level76) {
      results.push({ levequest: 'crabCorps', expac: 'shb' });
      results.push({ levequest: 'magicMushrooms', expac: 'shb' });
      results.push({ levequest: 'fishForDays', expac: 'shb' });
    }
    if (state.filters.shb && state.filters.level78) {
      results.push({ levequest: 'shortTermGains', expac: 'shb' });
      results.push({ levequest: 'deepSeaDiving', expac: 'shb' });
      results.push({ levequest: 'aFeastForTheSenses', expac: 'shb' });
    }
    return results;
  }
}
export const mutations = {
  updateFilters(state, filters) {
    state.filters = {...state.filters, ...filters};
  }
}