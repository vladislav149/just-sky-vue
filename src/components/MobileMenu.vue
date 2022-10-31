<template>
  <div class="mobile-menu" :class="{'mobile-menu--active': isOpen}">
    <ul class="mobile-menu__list">
      <li class="mobile-menu__item" @click="closeMenu">
        <router-link class="mobile-menu__link animation" :to="{name: 'price'}">
          стоимость
        </router-link>
      </li>

      <li class="mobile-menu__item" @click="closeMenu">
        <router-link
          class="mobile-menu__link animation"
          :to="{name: 'gallery'}"
        >
          галерея
        </router-link>
      </li>

      <li class="mobile-menu__item" @click="closeMenu">
        <router-link
          class="header__link animation"
          :to="{name: 'home', hash: '#we-have'}"
        >
          что у нас есть
        </router-link>
      </li>

      <li class="mobile-menu__item" @click="closeMenu">
        <router-link class="mobile-menu__link animation" :to="{name: 'rules'}">
          правила
        </router-link>
      </li>
    </ul>

    <j-s-social class="social--mobile" />

    <div class="address address--mobile">
      <span class="address__info address__info--time address__info--mobile">
        12:00-22:00 по будням
      </span>

      <span class="address__info address__info--time address__info--mobile">
        10:00-22:00 по&nbsp;выходным
      </span>

      <div @click="closeMenu">
        <router-link
          class="address__info address__info--address address__info--mobile animation-icon"
          :to="{hash: '#footer'}"
        >
          ул. Морских Пехотинцев, 10А
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import JSSocial from '@/components/Social'
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/mobileMenu'
export default {
  name: 'JSMobileMenu',
  components: {
    JSSocial
  },
  computed: {
    ...mapState({
      isOpen: state => state.mobileMenu.isOpen
    })
  },
  methods: {
    closeMenu() {
      this.$store.dispatch(actionTypes.closeMenu)
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  padding: 85px 15px 15px;
  position: fixed;
  border: 1px solid $black;
  background-color: $purple;
  width: 300px;
  min-height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s;

  &--active {
    transform: translateX(0);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    width: 140px;
    object-fit: cover;
    filter: invert(100%);
  }

  &__list {
    padding: 15px 0;
    text-transform: uppercase;
    color: $white;
    text-shadow: 2px 2px 2px $black;
  }

  &__item {
    width: fit-content;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
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
