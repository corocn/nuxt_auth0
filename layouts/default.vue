<template lang="pug">
div
  nav.navbar
    .navbar-item
      login-badge(:user="user")
    nuxt-link.navbar-item(to="/")
      | Top
    nuxt-link.navbar-item(to="/non_secure")
      | Non-Secure
    nuxt-link.navbar-item(to="/secure")
      | Secure
  section.section
    nuxt
</template>

<script>
import LoginBadge from '~/components/LoginBadge'
import { mapGetters } from 'vuex'

export default {
  components: { LoginBadge },
  computed: { ...mapGetters(['user']) }
}
</script>

<style scoped>
  nav.navbar {
    box-shadow:0px 1px 5px 1px gray;
  }
</style>
