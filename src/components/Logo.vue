<template>
  <router-link class="logo" :to="{name: 'home'}">
    <img
      class="logo__img"
      src="@/assets/images/logo/logo.svg"
      alt="логотип just sky"
    />
  </router-link>
</template>

<script>
export default {
  name: 'JSLogo'
}
</script>

<style lang="scss" scoped>
.logo {
  margin-right: 50px;

  &__img {
    width: 140px;
    height: 82px;
    object-fit: contain;

    @include w768 {
      width: 90px;
    }
  }
}
</style>
