<template lang="pug">
.loading(v-if="isLoading") Загрузка данных...
.page(v-else)
  .container
    h1.title Картины эпохи Возрождения
    .catalog 
      card-list(
        @addToCard="addToCard",
        @removeFromCard="removeFromCard",
        :isLoading="isLoadingAddToCart",
        v-bind:cards="CARDS"
      )
      cart-list(v-if="CART.length", :cart="CART")
</template>
<script>
import CardList from "../components/CardList.vue";
import CartList from "../components/CartList.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    CardList,
    CartList,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["CARDS", "CART"]),
    ...mapState({
      searchValue: (state) => state.searchValue,
      isLoading: (state) => state.isLoading,
      isLoadingAddToCart: (state) => state.isLoadingAddToCart,
    }),
  },

  methods: {
    ...mapActions(["GET_CARDS_FROM_API", "ADD_TO_CART", "REMOVE_FROM_CART"]),

    addToCard(card) {
      this.ADD_TO_CART(card);
    },

    removeFromCard(card) {
      this.REMOVE_FROM_CART(card);
    },
  },

  mounted() {
    this.GET_CARDS_FROM_API(this.searchValue);
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

.loading {
  margin-top: 40px;
  text-align: center;
  color: #343030;
  font-size: 40px;
}
</style>