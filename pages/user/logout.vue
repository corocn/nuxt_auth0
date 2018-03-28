<template lang="pug">
  p | Signing out...
</template>

<script>
export default {
  mounted() {
    this.$auth0.unsetToken()
    this.$store.commit('setUser', null)
    this.$router.replace('/')
  }
};
</script>
