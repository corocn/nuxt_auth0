<template lang="pug">
div
  div
    | Token will expire at {{ expire }}
  div
    img(
      :src="user.picture"
      width="200"
    )
  div(v-for="(value, key) in user")
    | {{key}} : {{value}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['loginRequired'],
  computed: {
    ...mapGetters(['user']),
    expire() {
      return new Date(+this.$auth0.getExpiresAt())
    }
  }
};
</script>
