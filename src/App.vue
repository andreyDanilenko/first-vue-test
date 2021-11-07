<template lang='pug'>
div
  navbar
  main.container
    catalog
  foobar
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Foobar from "./components/Foobar.vue";
import Catalog from "./components/Catalog.vue";

export default {
  components: {
    Navbar,
    Foobar,
    Catalog,
  },
};
</script>
<style lang="scss">
@import "./styles/styles.scss";
</style>