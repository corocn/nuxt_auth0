<template lang="pug">
  p | Signing in...
</template>

<script>
export default {
  mounted() {
    this.$auth0.setTokenByQuery()
    this.$store.commit('setUser', this.$auth0.getUser())
    this.$router.replace('/')
  }
};
</script>
