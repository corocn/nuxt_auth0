import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    user: 0
  },
  mutations: {
    setUser (state, user) {
      state.user = (user === null) ? null : { ...user }
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
});

export default store
