<template>
  <div id="show-auth"/>
</template>

<script>
  import { showLock } from '~/utils/auth'
  export default {
    mounted () {
      showLock('show-auth')
    }
  }
</script>

<style scoped>
#show-auth {
  margin-top: 20px;
}
</style>
