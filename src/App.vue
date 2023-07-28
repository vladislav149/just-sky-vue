<template>
  <div>
    <j-s-mobile-menu />
    <div
      class="wrapper"
      :class="{overlay: isOpen}"
      @click="closeMenu"
    >
      <j-s-header />
      <main class="main">
        <router-view />
      </main>
      <j-s-footer />
    </div>
  </div>
</template>

<script>
import JSHeader from '@/components/Header'
import JSMobileMenu from '@/components/MobileMenu'
import JSFooter from '@/components/Footer'
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/mobileMenu'
export default {
  name: 'JSApp',
  components: {
    JSHeader,
    JSMobileMenu,
    JSFooter
  },
  computed: {
    ...mapState({
      isOpen: state => state.mobileMenu.isOpen
    })
  },
  watch: {
    isOpen() {
      document.body.classList.toggle('body--no-scroll')
    }
  },
  methods: {
    closeMenu(e) {
      const BURGER_BTN = document.querySelector('.burger')
      if (e.target !== BURGER_BTN && this.isOpen) {
        this.$store.dispatch(actionTypes.closeMenu)
      }
    }
  }
}
</script>

<style lang="scss">
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

body {
  background-color: $white;
  color: $black;
  font-size: 18px;
  line-height: 1.4;
  font-family: 'IBMPlexSans', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.body--no-scroll {
  overflow: hidden;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  margin-bottom: auto;
  padding-top: 170px;

  &:has(.gallery) {
    flex-grow: 1;
    display: flex;
  }

  @include w992 {
    padding-top: 240px;
  }

  @include w768 {
    padding-top: 100px;
  }
}

.container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
}

.overlay {
  &::after {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba($black, 0.15);
    z-index: 50;
  }
}

.title {
  text-transform: uppercase;
  font-size: 24px;
  font-family: 'IBMPlexSans', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.new {
  color: $red;
  text-transform: uppercase;
}
</style>
