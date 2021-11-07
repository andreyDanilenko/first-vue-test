<template lang="pug">
.basket CART
</template>
<script>
export default {
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss">
</style>