<template lang="pug">
.container
  .notification(v-if="!loggedIn()")
    .content
      nuxt-link.button.is-primary(to="/user/login")
        span.icon
          i.fa.fa-sign-in
        span Login

  .notification(v-if="loggedIn()")
    .content
      nuxt-link.button.is-warning(to="/user/logout")
        span.icon
          i.fa.fa-sign-out
        span Logout

</template>

<script>
import AppLogo from '~/components/AppLogo'

export default {
  components: { AppLogo },
  methods: {
    loggedIn() {
      return this.$auth0.isAuthenticated();
    }
  }
}
</script>
