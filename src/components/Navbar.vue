<template lang="pug">
header 
  ul.nav
    li.nav__item 
      a.nav__link(href="#") Каталог
    li.nav__item 
      a.nav__link(href="#") Доставка
    li.nav__item
      a.nav__link(href="#") Оплата
    li.nav__item 
      a.nav__link(href="#") Контакты
    li.nav__item 
      a.nav__link(href="#") О компании
  .search 
    input(type="text", v-model.trim="something")
</template>
<script>
export default {
  data() {
    return {
      something: "",
    };
  },
};
</script>
<style lang="scss" scoped>
</style>