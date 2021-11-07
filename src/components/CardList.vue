<template lang="pug">
.cards
  card-item(
    v-for="card in cards",
    :card="card",
    :key="card.id",
    @addToCard="addToCard"
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
  },

  methods: {
    addToCard(card) {
      this.$emit("addToCard", card);
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