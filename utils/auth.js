import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'

const config = {
  clientID: 'bWSCL499LksS6Zf9wWyFUFjvwA0vkQoj',
  domain: 'nuxt-auth0.auth0.com'
}

export const showLock = (container) => {
  const options = {
    container,
    closable: false,
    auth: {
      responseType: 'token id_token',
      redirectUrl: getBaseUrl() + '/callback',
      params: {
        scope: 'openid profile email'
      }
    }
  }

  const lock = new Auth0Lock(
    config.clientID,
    config.domain,
    options
  )

  lock.show()
}

const getBaseUrl = () => {
  return `${window.location.protocol}//${window.location.host}`
}

export const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const setToken = ({access_token, id_token, expires_in}) => {
  const localStorage = window.localStorage
  localStorage.setItem('accessToken', access_token)
  localStorage.setItem('idToken', id_token)
  localStorage.setItem('expiresAt', expires_in * 1000 + new Date().getTime())
  localStorage.setItem('user', JSON.stringify(jwtDecode(id_token)))
}

export const isAuthenticated = () => {
  const expiresAt = localStorage.getItem('expiresAt')
  console.log(new Date().getTime())
  console.log(expiresAt)
  return new Date().getTime() < expiresAt
}
