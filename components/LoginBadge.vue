<template lang="pug">
  div
    div(v-if="user")
      p.control
        nuxt-link.button(to="/user")
          img(:src="user.picture")
    div(v-else)
      p.control
        nuxt-link.button(to="/user/login")
          span.icon
            i.fa.fa-sign-in
</template>

<script>
  export default {
    props: {
      user: {type: [Object, Number], default: null}
    }
  }
</script>

