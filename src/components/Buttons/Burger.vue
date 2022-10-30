<template>
  <button class="burger animation-icon" type="button">
    <span class="burger__line"></span>
    <span class="sr-only">кнопка меню</span>
  </button>
</template>

<script>
export default {
  name: 'JSBurger'
}
</script>

<style lang="scss" scoped>
.burger {
  display: none;
  position: relative;
  width: 44px;
  height: 44px;
  z-index: 2;

  @include w768 {
    display: block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 2px;
    background-color: $black;
  }

  &::before {
    top: 11px;
  }

  &::after {
    bottom: 11px;
  }

  &__line {
    display: block;
    width: 30px;
    background-color: $black;
    height: 2px;
  }
}
</style>
