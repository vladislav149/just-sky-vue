<template>
  <section class="not-found">
    <div class="container">
      <h2 class="title not-found__title">Ой, страница не найдена</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JSPageNotFound'
}
</script>

<style lang="scss" scoped>
.not-found {
  padding: 100px 0;
  background-image: url('@/assets/images/pageNotFound/pageNotFound.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__title {
    text-align: center;
    color: $blue;
    font-size: 70px;

    @include w576 {
      font-size: 60px;
    }
  }
}
</style>
