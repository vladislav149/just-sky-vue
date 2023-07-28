<template>
  <vueper-slides>
    <vueper-slide
      v-for="slide in images"
      :key="slide.id"
      :image="slide.src"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: '',
  components: {VueperSlides, VueperSlide},
  data() {
    return {
      images: [
        {id: 0, src: require('@/assets/images/gallery/1.jpg')},
        {id: 1, src: require('@/assets/images/gallery/2.jpg')},
        {id: 2, src: require('@/assets/images/gallery/3.jpg')},
        {id: 3, src: require('@/assets/images/gallery/4.jpg')},
        {id: 4, src: require('@/assets/images/gallery/5.jpg')},
        {id: 5, src: require('@/assets/images/gallery/6.jpg')},
        {id: 6, src: require('@/assets/images/gallery/7.jpg')},
        {id: 7, src: require('@/assets/images/gallery/8.jpg')},
        {id: 8, src: require('@/assets/images/gallery/9.jpg')},
        {id: 9, src: require('@/assets/images/gallery/10.jpg')},
        {id: 10, src: require('@/assets/images/gallery/11.jpg')},
        {id: 11, src: require('@/assets/images/gallery/12.jpg')},
        {id: 12, src: require('@/assets/images/gallery/13.jpg')},
        {id: 13, src: require('@/assets/images/gallery/14.jpg')},
        {id: 14, src: require('@/assets/images/gallery/15.jpg')},
        {id: 15, src: require('@/assets/images/gallery/16.jpg')},
        {id: 16, src: require('@/assets/images/gallery/17.jpg')},
        {id: 17, src: require('@/assets/images/gallery/18.jpg')},
        {id: 18, src: require('@/assets/images/gallery/19.jpg')},
        {id: 19, src: require('@/assets/images/gallery/20.jpg')},
        {id: 20, src: require('@/assets/images/gallery/21.jpg')},
        {id: 21, src: require('@/assets/images/gallery/22.jpg')},
        {id: 22, src: require('@/assets/images/gallery/23.jpg')}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.vueperslides {
  height: 100%;

  ::v-deep &__inner {
    height: 100%;
  }

  ::v-deep &__parallax-wrapper {
    height: 100%;
    min-height: 500px;
  }

  ::v-deep &__arrow {
    color: $sweetie;
  }

  ::v-deep &__bullets {
    @include w768 {
      display: none;
    }
  }
}

.vueperslide {
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
