<template lang="pug">
header.navbar
  .container
    .navbar__wrapper
      .navbar__links
        router-link.navbar__link(to="/") Каталог
        a.navbar__link(href="#") Доставка
        a.navbar__link(href="#") Оплата
        a.navbar__link(href="#") Контакты
        router-link.navbar__link(to="/about") О компании
      .navbar__search 
        input(
          @keyup.enter="search",
          type="text",
          v-model.trim="searchValue",
          placeholder="Поиск по названию картины"
        )

        my-button(@click.native="search") Найти
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import MyButton from "./UI/MyButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    ...mapActions(["GET_CARDS_FROM_API", "ADD_TO_CART"]),
    ...mapMutations(["SET_SEARCH_VALUE"]),

    search() {
      this.GET_CARDS_FROM_API(this.searchValue);
      this.searchValue = "";
      if (this.$route.path !== "/") this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.navbar {
  border-bottom: 1px solid #e1e1e1;
  padding: 24px 0;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1024px) {
      flex-wrap: nowrap;
    }
  }

  &__links {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 600px) {
      flex-wrap: nowrap;
    }
  }

  &__link {
    font-family: "Merriweather";
    color: #343030;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    text-decoration: none;
    margin: 0 24px;
  }

  &__search {
    margin: 20px auto 0;
    position: relative;
    display: flex;

    @media (min-width: 1024px) {
      margin: 0;
    }

    input {
      font-family: "Merriweather";
      width: 100%s;
      display: block;
      background-color: #f6f3f3;
      width: 100%;
      border: 1px solid #e1e1e1;
      border-right: none;
      padding: 13px 16px;
      color: #9f9f9f;
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;

      @media (min-width: 600px) {
        min-width: 290px;
      }
    }
  }
}
</style>