export default function ({ app, store }) {
  if (app.$auth0.isAuthenticated()) {
    if (!store.getters.user) {
      const user = app.$auth0.getUser()
      store.commit('setUser', user)
    }

    app.$auth0.updateTokensIfNecessary()
  }
}
