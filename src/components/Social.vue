<template>
  <ul class="social">
    <li class="social__item" v-for="link in links" :key="link.href">
      <a
        class="social__link animation-icon"
        :href="link.href"
        target="_blank"
        :style="{
          'background-image': link.backgroundImage
        }"
      >
        <span class="sr-only">{{ link.srOnly }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'JSSocial',
  data() {
    return {
      links: [
        {
          href: 'https://instagram.com/just_sky_vld',
          backgroundImage: `url(${require('@/assets/images/icons/social/instagram.svg')})`,
          srOnly: 'наша инстаграм страница'
        },
        {
          href: 'https://vk.com/just_sky_vld',
          backgroundImage: `url(${require('@/assets/images/icons/social/vk.svg')})`,
          srOnly: 'наша группа в ВК'
        },
        {
          href: 'https://www.tiktok.com/@just_sky_vld',
          backgroundImage: `url(${require('@/assets/images/icons/social/tiktok.svg')})`,
          srOnly: 'наш тикток'
        },
        {
          href: 'https://www.youtube.com/channel/UC7rInjy5d0ZuPov6aKr3LrQ/featured',
          backgroundImage: `url(${require('@/assets/images/icons/social/youtube.svg')})`,
          srOnly: 'наш youtube'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;

  &--header {
    @include w576 {
      display: none;
    }
  }

  &--mobile {
    filter: invert(100%) sepia(27%) saturate(156%) hue-rotate(57deg)
      brightness(101%) contrast(93%);
  }

  &__item {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__link {
    display: block;
    padding: 22px 0;
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
