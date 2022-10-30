<template>
  <button
    class="burger animation-icon"
    type="button"
    :class="{'burger--active': isOpen}"
  >
    <span class="burger__line"></span>
    <span class="sr-only">кнопка меню</span>
  </button>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'JSBurger',
  computed: {
    ...mapState({
      isOpen: state => state.mobileMenu.isOpen
    })
  }
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
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  &::before {
    top: 11px;
    animation-name: line-top;
  }

  &::after {
    bottom: 11px;
    animation-name: line-bottom;
  }

  &__line {
    position: relative;
    display: block;
    width: 30px;
    background-color: $black;
    height: 2px;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-name: line-center;
  }

  @keyframes line-top {
    0% {
      top: 22px;
      transform: rotate(42deg);
    }

    30% {
      transform: rotate(0);
      top: 22px;
    }

    100% {
      top: 11px;
    }
  }

  @keyframes line-center {
    0% {
      width: 0;
      left: 15px;
    }

    100% {
      width: 30px;
      left: 0;
    }
  }

  @keyframes line-bottom {
    0% {
      bottom: 22px;
      transform: rotate(-42deg);
    }

    30% {
      transform: rotate(0);
      bottom: 22px;
    }

    100% {
      bottom: 11px;
    }
  }

  &--active {
    &::before,
    &::after {
      animation-duration: 0.4s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    }

    &::before {
      animation-name: line-top-active;
    }

    &::after {
      animation-name: line-bottom-active;
    }

    .burger__line {
      animation-duration: 0.4s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
      animation-name: line-center-active;
    }
  }

  @keyframes line-top-active {
    0% {
      top: 11px;
    }

    30% {
      top: 21px;
      transform: rotate(0);
    }

    100% {
      top: 21px;
      transform: rotate(42deg);
    }
  }

  @keyframes line-center-active {
    0% {
      width: 30px;
      left: 0;
    }

    100% {
      width: 0;
      left: 15px;
    }
  }

  @keyframes line-bottom-active {
    0% {
      bottom: 11px;
    }

    30% {
      bottom: 21px;
      transform: rotate(0);
    }

    100% {
      bottom: 21px;
      transform: rotate(-42deg);
    }
  }
}
</style>
