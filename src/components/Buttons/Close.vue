<template>
  <button
    class="close close--menu animation-icon animation-icon--close"
    type="button"
  ></button>
</template>

<script>
export default {
  name: 'JSClose'
}
</script>

<style lang="scss" scoped>
.close {
  position: relative;
  width: 44px;
  height: 44px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: $white;
    height: 2px;
    border-radius: 1px;
    width: 34px;
    left: 5px;
    box-shadow: 1px 1px 15px $black;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &--menu {
    &::before,
    &::after {
      width: 27px;
    }
  }
}
</style>
