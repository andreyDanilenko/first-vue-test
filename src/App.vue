<template lang='pug'>
div
  navbar
  main
    router-view 
  foobar
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Foobar from "./components/Foobar.vue";

export default {
  components: {
    Navbar,
    Foobar,
  },
};
</script>
<style lang="scss">
@import "./assets/styles/styles.scss";
</style>