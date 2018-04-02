<template lang="pug">
  p | Signing in...
</template>

<script>
export default {
  mounted() {
    this.$auth0.setTokenByQuery()
    this.$router.replace('/')
  }
};
</script>
