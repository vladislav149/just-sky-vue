<template>
  <section class="rules">
    <div class="container">
      <div class="rules__inner">
        <h2 class="rules__title title">Правила:</h2>
        <ul class="rules__list">
          <li class="rules__item">
            <p class="rules__rule">Один батут - один человек</p>
          </li>
          <li class="rules__item">
            <p class="rules__rule">
              Заднее сальто и спиной назад в поролоновую яму прыгать запрещено!
              Лицом вперёд, переднее сальто и кувырки можно
            </p>
          </li>
          <li class="rules__item">
            <p class="rules__rule">
              Бегать, бороться на батутной арене запрещено
            </p>
          </li>
          <li class="rules__item">
            <p class="rules__rule">
              Проносить еду и напитки в батутную зону запрещено
            </p>
          </li>
          <li class="rules__item">
            <p class="rules__rule">
              Без носков прыгать запрещено (Можно прыгать в любых носках)
            </p>
          </li>
          <li class="rules__item">
            <p class="rules__rule">
              На тумбах (2,3,4 метра) ограничение
              <span class="rules__adult"> 18+ </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JSRules'
}
</script>

<style lang="scss" scoped>
.rules {
  position: relative;
  padding-top: 70px;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: $grey;
    top: 20px;
    left: 0;
  }

  &__title {
    text-align: center;
    margin-bottom: 60px;
    font-size: 36px;
  }

  &__list {
    font-size: 24px;
    max-width: 800px;
    margin: 0 auto 60px;
  }

  &__item {
    position: relative;
    padding-left: 35px;
    line-height: 1.6;
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &::before {
      position: absolute;
      content: '';
      left: 0;
      top: 7px;
      width: 25px;
      height: 25px;
      background-image: url(@/assets/images/icons/trampoline.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &__adult {
    color: $red;
    font-style: italic;
    text-decoration: underline;
  }
}
</style>
