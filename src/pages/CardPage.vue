<template lang="pug">
.card-page(v-if="card")
  .container 
    h2.card-page__title {{ card.title }}
    p.card-page__price {{ card.price }} $
    .card-page__info
      img.card-page__poster(
        v-if="posterCard !== ''",
        :src="require('../assets/img/' + posterCard)"
      ) 
      img.card-page__poster(
        v-else,
        :src="require('../assets/img/' + card.slides[0])"
      ) 
      .card-page__slider 
        button.card-page__slide(
          @click="opened(index)",
          v-for="(item, index) in card.slides",
          :key="index"
        )
          img.card-page__slide-img(:src="require('../assets/img/' + item)")
      p.card-page__description {{ card.description }}
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      posterCard: "",
    };
  },

  methods: {
    ...mapActions(["GET_CARD_FROM_API"]),
    ...mapMutations(["SET_CARD_DESTROY"]),

    opened(evt) {
      this.posterCard = this.card.slides[evt];
    },
  },

  created() {
    this.GET_CARD_FROM_API(this.$route.params.id);
  },

  computed: {
    ...mapState({
      card: (state) => state.card,
    }),
  },

  destroyed() {
    this.SET_CARD_DESTROY();
  },
};
</script>
<style lang="scss">
.card-page {
  &__title {
    margin-top: 40px;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
  }

  &__info {
    width: 50%;
    margin: 40px auto 0;
    border: 1px solid #e1e1e1;
    padding: 20px;
  }

  &__poster {
    width: 100%;
    display: block;
  }

  &__description {
    margin-top: 20px;
    text-align: center;
  }

  &__slider {
    display: flex;
  }

  &__slide {
    padding: 10px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #e1e1e1;
    margin: 5px;

    img {
      display: block;
      width: 100%;
    }
  }

  &__price {
    width: 50%;
    font-size: 40px;
    text-align: center;
    margin: 40px auto 0;
    border: 1px solid #e1e1e1;
    padding: 20px;
  }
}
</style>