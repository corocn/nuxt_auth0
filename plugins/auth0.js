import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'
import queryString from 'query-string'
const config = require('../nuxt.config.js')

const UPDATE_SESSION_MINUTES = config.auth0.updateSessionMinutes || 5

class Auth0Util {
  constructor(context) {
    this.context = context
  }

  getLock(container) {
    return new Auth0Lock(
      config.auth0.clientID,
      config.auth0.domain,
      {
        container,
        closable: false,
        rememberLastLogin: false,
        auth: {
          responseType: 'token id_token',
          redirectUrl: this.getBaseUrl() + '/user/callback',
          params: {
            scope: 'openid profile email'
          }
        }
      });
  }

  showLock(container) {
    this.getLock(container).show();
  }

  updateTokensIfNecessary() {
    if (new Date().getTime() < (+this.getExpiresAt() - (UPDATE_SESSION_MINUTES * 60 * 1000))) {
      return
    }

    const lock = this.getLock();

    lock.checkSession({scope: 'openid profile email'}, (error, authResult) => {
      if (error || !authResult) {
        lock.show()
      } else {
        const {accessToken, idToken, expiresIn} = authResult

        this.setToken({
          access_token: accessToken,
          id_token: idToken,
          expires_in: expiresIn
        });

        console.log('TOKEN UPDATED')
      }
    })
  }

  logout() {
    this.unsetToken();
    this.getLock().logout({ returnTo: '/'})
  }

  getBaseUrl() {
    return `${window.location.protocol}//${window.location.host}`
  }

  getQueryParams() {
    return queryString.parse(location.hash)
  }

  setToken({access_token, id_token, expires_in}) {
    window.localStorage.setItem('accessToken', access_token)
    window.localStorage.setItem('idToken', id_token)
    window.localStorage.setItem('expiresAt', expires_in * 1000 + new Date().getTime())
    window.localStorage.setItem('user', JSON.stringify(jwtDecode(id_token)))
  }

  setTokenByQuery() {
    this.setToken(this.getQueryParams())
  }

  isAuthenticated() {
    const expiresAt = window.localStorage.getItem('expiresAt')
    return new Date().getTime() < expiresAt
  }

  unsetToken() {
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('idToken')
    window.localStorage.removeItem('expiresAt')
    window.localStorage.removeItem('user')
  }

  getExpiresAt() {
    return localStorage.getItem('expiresAt')
  }

  getIdToken() {
    return this.isAuthenticated() ? localStorage.getItem('idToken') : null
  }

  getAccessToken() {
    return this.isAuthenticated() ? localStorage.getItem('accessToken') : null
  }

  getUser() {
    return this.isAuthenticated() ? JSON.parse(localStorage.getItem('user')) : null
  }
}

export default (context, inject) => {
  inject('auth0', new Auth0Util(context));
}
