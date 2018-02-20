import Auth0Lock from 'auth0-lock'

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
