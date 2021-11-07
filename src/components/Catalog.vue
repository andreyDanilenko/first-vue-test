<template lang="pug">
.catalog
  card-list(@addToCard="addToCard", v-bind:cards="CARDS")
  cart(v-if="CART.length", :cart="CART")
</div>
</template>
<script>
import CardList from "./CardList.vue";
import Cart from "./Cart.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CardList,
    Cart,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["CARDS", "CART"]),
  },

  methods: {
    ...mapActions(["GET_CARDS_FROM_API", "ADD_TO_CART"]),

    addToCard(card) {
      this.ADD_TO_CART(card);
    },
  },

  mounted() {
    this.GET_CARDS_FROM_API();
  },
};
</script>
<style lang="">
</style>