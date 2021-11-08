<template  lang="pug">
footer.footer
  .container
    .footer__wrapper
      .footer__links
        router-link.footer__link(to="/") Каталог
        a.footer__link(href="#") Доставка
        a.footer__link(href="#") Оплата
        a.footer__link(href="#") Контакты
        router-link.footer__link(to="/about") О компании
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
  margin-top: 40px;
  border-bottom: 1px solid #e1e1e1;
  background: #eceaea;
  padding: 24px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__links {
    flex-grow: 1;
    display: flex;
    justify-content: center;
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
}
</style>