<template>
  <header class="header">
    <div class="container">
      <nav class="header__navigation">
        <address class="header__top">
          <div class="address">
            <div class="address__container">
              <span class="address__info address__info--time">
                12:00-22:00
              </span>

              <span
                class="address__info address__info--time address__info--weekends"
              >
                10:00-22:00
              </span>
            </div>

            <div class="address__container">
              <router-link
                class="address__info address__info--address animation-icon"
                :to="{hash: '#footer'}"
              >
                ул. Морских Пехотинцев, 10А
              </router-link>

              <a
                class="address__info address__info--phone animation-icon"
                href="tel:+79969172670"
              >
                8 (996) 917-26-70
              </a>
            </div>
          </div>
          <j-s-social class="social--header" />
        </address>

        <div class="header__bottom">
          <div @click="toggleMenu">
            <j-s-burger />
          </div>
          <j-s-logo />

          <ul class="header__list">
            <li class="header__item">
              <router-link class="header__link animation" :to="{name: 'price'}">
                стоимость
              </router-link>
            </li>

            <li class="header__item">
              <router-link
                class="header__link animation"
                :to="{name: 'gallery'}"
              >
                галерея
              </router-link>
            </li>
            <li class="header__item">
              <router-link
                class="header__link animation"
                :to="{name: 'home', hash: '#we-have'}"
              >
                что у нас есть
              </router-link>
            </li>

            <li class="header__item">
              <router-link class="header__link animation" :to="{name: 'rules'}">
                правила
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import JSLogo from '@/components/Logo'
import JSSocial from '@/components/Social'
import JSBurger from '@/components/Buttons/Burger'
import {actionTypes} from '@/store/modules/mobileMenu'
export default {
  name: 'JSHeader',
  components: {
    JSLogo,
    JSSocial,
    JSBurger
  },
  methods: {
    toggleMenu() {
      return this.$store.state.mobileMenu.isOpen
        ? this.$store.dispatch(actionTypes.closeMenu)
        : this.$store.dispatch(actionTypes.openMenu)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: white;
  z-index: 100;

  &__navigation {
    @include w768 {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include w768 {
      display: none;
    }
  }

  &__item {
    text-transform: uppercase;
    font-weight: 600;
  }

  &__link {
    padding: 10px 0;
  }
}

.address {
  display: flex;

  @include w768 {
    margin-right: 15px;
  }

  @include w576 {
    margin-right: 0;
    font-size: 16px;
  }

  &--mobile {
    flex-direction: column;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__info {
    padding: 20px 0 20px 22px;
    position: relative;
    margin-right: 15px;

    &::before {
      content: '';
      position: absolute;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &--time {
      @include w768 {
        display: none;
      }

      &::before {
        background-image: url(@/assets/images/icons/time.svg);
      }
    }

    &--address {
      @include w768 {
        display: none;
      }

      &::before {
        background-image: url(@/assets/images/icons/location.svg);
      }
    }

    &--phone {
      white-space: nowrap;
      &::before {
        background-image: url(@/assets/images/icons/phone.svg);
      }
    }

    &--time::after {
      content: 'по будням';
      position: absolute;
      width: max-content;
      top: 7px;
      font-size: 14px;
      left: 50%;
      transform: translateX(-50%);

      @include w768 {
        display: none;
      }
    }

    &--weekends::after {
      content: 'по выходным';
    }

    &--mobile {
      display: block;
      padding: 10px 0 10px 22px;
      color: $white;
      text-shadow: 2px 2px 2px $black;

      &::before {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(46deg)
          brightness(101%) contrast(101%);
      }
    }
  }
}
</style>
