<template>
  <p>Signing out...</p>
</template>

<script>
  import { unsetToken } from '~/utils/auth'
  export default {
    mounted () {
      unsetToken()
      this.$router.replace('/')
    }
  }
</script>
