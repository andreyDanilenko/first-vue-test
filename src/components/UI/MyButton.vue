<template lang="pug">
button.button
  slot
</template>
<script>
export default {
  name: "my-button",
};
</script>
<style lang="scss">
.button {
  font-family: "Merriweather";
  outline: none;
  border: none;
  cursor: pointer;
  padding: 14px 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #f4f6f9;
  background: #382e2b;
}
</style>