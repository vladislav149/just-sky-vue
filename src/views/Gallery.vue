<template>
  <section class="gallery">
    <div class="gallery__container container">
      <MySlides />
    </div>
  </section>
</template>

<script>
import MySlides from '@/components/MySlides'

export default {
  name: 'JSGallery',
  components: {MySlides}
}
</script>

<style lang="scss" scoped>
.gallery {
  flex-grow: 1;

  &__container {
    height: 100%;
  }
}
</style>
