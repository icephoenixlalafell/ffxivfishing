import Vue from 'vue';

export const state = () => (
  {
    currentUser: null
  }
)

export const getters = {
  getUser: state => {
    return state.currentUser;
  },
  getFullName: state => {
    if ( state.currentUser !== null ) {
      return state.currentUser.user_metadata.full_name;
    }
    return '';
  }
}

export const actions = {
  setUser( { commit }, payload ) {
    commit( 'SET_USER', { id: 'currentUser', data: payload } );
  }
}

export const mutations = {
  SET_USER( state, {id, data} ) {
    if ( !data ) {
      Vue.set( state, id, null );
      if ( window ) {
        window.localStorage.removeItem( 'user' );
      }
      return;
    }
    let theUser = JSON.stringify( data );
    Vue.set( state , id, data );
    if ( window ) {
      window.localStorage.setItem( 'user', theUser );
    }
  }  
}
