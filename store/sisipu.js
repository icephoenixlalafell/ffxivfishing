import Vue from 'vue';

export const state = () => (
  {
    leves: null
  }
)

export const getters = {
  getLeves: state => {
    return state.leves;
  }
}

const getLevesAPI = () => {
  // API call to get leves data here
  return {};
}

export const actions = {
  sisipu( { commit }, { func, params } ) {
    switch (func) {
      case 'getLeves': {
        const data = getLevesAPI( params );
        commit( 'SET_LEVES', { id: 'leves', data: data } )
        break;
      }
      default: {
        break;
      }
    }
  }
}

export const mutations = {
  SET_LEVES( state, {id, data} ) {
    if ( !data ) {
      Vue.set( state, id, null );
      return;
    }
    Vue.set( state , id, data );
  }  
}
