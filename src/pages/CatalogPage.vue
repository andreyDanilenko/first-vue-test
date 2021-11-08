<template lang="pug">
.page
  .container
    h1.title Картины эпохи Возрождения
    .catalog
      card-list(@addToCard="addToCard", v-bind:cards="CARDS")
      //- cart-list(v-if="CART.length", :cart="CART")
</template>
<script>
import CardList from "../components/CardList.vue";
// import CartList from "../components/CartList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CardList,
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
<style lang="scss" scoped>
.title {
  margin-top: 45px;
  color: #343030;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
}
</style>