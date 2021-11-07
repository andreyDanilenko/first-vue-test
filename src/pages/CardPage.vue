<template lang="pug">
.card-page
  .container 
    h2.card-page__title {{ card.title }}
    img.card-page__poster(:src="require('../assets/img/' + card.poster)") 
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["GET_CARD_FROM_API"]),
  },

  created() {
    this.GET_CARD_FROM_API(this.$route.params.id);
  },

  computed: {
    ...mapState({
      card: (state) => state.card,
    }),
  },
};
</script>
<style lang="scss">
.card-page {
  &__title {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }

  &__poster {
    margin: 40px auto 0;
    width: 50%;
    display: block;
  }
}
</style>