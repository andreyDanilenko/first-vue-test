<template lang="pug">
.card(:class="!card.isAvailability ? 'card--disabled' : ''")
  img.card__poster(
    @click="openCard",
    :src="require('../assets/img/' + card.poster)"
  )
  h3.card__title {{ card.title }}
  .card__bye(v-if="card.isAvailability === false") Продана на аукционе
  .card__bye(v-else)
    .card__price
      .card__old-price(v-if="card.oldPrice === ''")
      .card__old-price(v-else) {{ card.oldPrice }} $
      .card__new-price {{ card.price }}
    my-button(@click.native="addToCard") Купить
</template>
<script>
import MyButton from "./UI/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addToCard() {
      this.$emit("addToCard", this.card);
    },

    openCard() {
      this.$router.push(`${this.card.id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  margin: 32px 8px 0;
  width: 100%;
  border: 1px solid #e1e1e1;

  &:hover {
    transform: scale(1.01);
  }

  &--disabled {
    opacity: 0.5;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 600px) {
    width: calc(50% - 16px);
  }

  @media (min-width: 900px) {
    width: calc((100% / 3) - 16px);
  }

  @media (min-width: 1100px) {
    width: calc((100% / 4) - 16px);
  }

  &__poster {
    cursor: pointer;
    background-size: cover;
    display: block;
    width: 100%;
  }

  &__title {
    margin: 20px 24px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }

  &__bye {
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }

  &__old-price {
    color: #a0a0a0;
    text-decoration: line-through;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  &__new-price {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  &__button {
    cursor: pointer;
    padding: 14px 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #f4f6f9;
    background: #382e2b;
  }
}
</style>