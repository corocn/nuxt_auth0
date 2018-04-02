<template lang="pug">
div(id="show-lock")
</template>

<script>
export default {
  mounted() {
    this.$auth0.showLock('show-lock');
  }
};
</script>

<style scoped>
  #show-auth {
    margin-top: 20px;
  }
</style>
