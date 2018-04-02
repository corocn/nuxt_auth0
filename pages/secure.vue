<template lang="pug">
div
  p
    | Here is secured
  div
    button.button.is-primary(@click="getUserInfo")
      | Console.log GetUserInfo
</template>

<script>
  export default {
    middleware: ['loginRequired'],
    methods: {
      getUserInfo () {
        this.$auth0.getLock().getUserInfo(this.$auth0.getAccessToken(), function(error, profile) {
          console.log(profile);
        });
      }
    }
  }
</script>
