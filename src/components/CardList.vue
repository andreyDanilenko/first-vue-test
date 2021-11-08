<template lang="pug">
.cards
  card-item(
    v-for="card in cards",
    :card="card",
    :isLoading="isLoading",
    :key="card.id",
    @addToCard="addToCard",
    @removeFromCard="removeFromCard"
  )
</template>
<script>
import CardItem from "./CardItem.vue";

export default {
  components: { CardItem },
  props: {
    cards: {
      type: Array,
      required: true,
    },

    isLoading: {
      type: Boolean,
    },
  },

  methods: {
    addToCard(card) {
      this.$emit("addToCard", card);
    },

    removeFromCard(card) {
      this.$emit("removeFromCard", card);
    },
  },
};
</script>
<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -8px;
}
</style>