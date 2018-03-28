import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'
import queryString from 'query-string'

const config = {
  clientID: 'bWSCL499LksS6Zf9wWyFUFjvwA0vkQoj',
  domain: 'nuxt-auth0.auth0.com'
}

class Auth0Util {
  showLock(container) {
    const lock = new Auth0Lock(
      config.clientID,
      config.domain,
      {
        container,
        closable: false,
        auth: {
          responseType: 'token id_token',
          redirectUrl: this.getBaseUrl() + '/user/callback',
          params: {
            scope: 'openid profile email'
          }
        }
      })

    lock.show()
    // lock.checkSession({}, function (error, authResult) {
    //   if (error || !authResult) {
    //     lock.show();
    //   } else {
    //     console.log(authResult);
    //     lock.getUserInfo(authResult.accessToken, function (error, profile) {
    //       console.log(error, profile);
    //     });
    //   }
    // });
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
    this.setToken(this.getQueryParams());
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

  getIdToken() { return this.isAuthenticated() ? localStorage.getItem('idToken') : null }
  getAccessToken() { return this.isAuthenticated() ? localStorage.getItem('idToken') : null }
  getUser() { return this.isAuthenticated() ? JSON.parse(localStorage.getItem('user')) : null }
}

export default (context, inject) => {
  inject('auth0', new Auth0Util);
}
