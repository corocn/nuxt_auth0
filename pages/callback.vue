<template>
  <p>Signing in...</p>
</template>

<script>
  import { setToken, getQueryParams } from '~/utils/auth'
  export default {
    mounted () {
      setToken(getQueryParams())
      this.$router.replace('/')
    }
  }
</script>
