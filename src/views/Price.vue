<template>
  <section class="our-prices">
    <div class="container">
      <div class="our-prices__inner">
        <h2 class="our-prices__title title">price list<sup>*</sup></h2>
        <h3 class="our-prices__subtitle">свободное посещение</h3>

        <ul class="our-prices__list">
          <li class="our-prices__item">
            <span class="our-prices__text">30 минут</span>
            <span class="our-prices__price">200₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">1 час</span>
            <span class="our-prices__price">300₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">2 час</span>
            <span class="our-prices__price">500₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">безлимит</span>
            <span class="our-prices__price">700₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">безлимит на ночь</span>
            <span class="our-prices__price">500₽</span>
          </li>
        </ul>

        <h3 class="our-prices__subtitle">тренировки</h3>

        <ul class="our-prices__list">
          <li class="our-prices__item">
            <span class="our-prices__text">
              персональная тренировка с тренером
            </span>
            <span class="our-prices__price">500₽</span>
          </li>
        </ul>

        <h3 class="our-prices__subtitle">абонементы</h3>
        <ul class="our-prices__list">
          <li class="our-prices__item">
            <span class="our-prices__text">
              абонемент на свободные посещения (30&nbsp;дней)
            </span>
            <span class="our-prices__price">3000₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">
              абонемент на ночь (4&nbsp;посещения)
            </span>
            <span class="our-prices__price">1800₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">
              абонемент с тренером (8&nbsp;посещений)
            </span>
            <span class="our-prices__price">2000₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">
              абонемент с тренером (12&nbsp;посещений)
            </span>
            <span class="our-prices__price">3000₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">
              <span class="new">new</span>
              фитнес на батутах (12&nbsp;посещений)
            </span>
            <span class="our-prices__price">1000₽</span>
          </li>
        </ul>

        <h3 class="our-prices__subtitle">аренды</h3>

        <ul class="our-prices__list">
          <li class="our-prices__item">
            <span class="our-prices__text"> аренда зала на 1 час </span>
            <span class="our-prices__price">4000₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text"> аренда зала на 2 часа </span>
            <span class="our-prices__price">7000₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">
              аренда зала на всю ночь (23:00-7:00)
            </span>
            <span class="our-prices__price">7000₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">
              аренда зала на весь день (12:00-22:00)
            </span>
            <span class="our-prices__price">20000₽</span>
          </li>
        </ul>

        <h3 class="our-prices__subtitle">анимационные программы</h3>

        <ul class="our-prices__list">
          <li class="our-prices__item">
            <span class="our-prices__text">1 час</span>
            <span class="our-prices__price">2500₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">2 час</span>
            <span class="our-prices__price">4500₽</span>
          </li>
        </ul>

        <h3 class="our-prices__subtitle">теннисный стол</h3>

        <ul class="our-prices__list">
          <li class="our-prices__item">
            <span class="our-prices__text">30 минут</span>
            <span class="our-prices__price">50₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">1 час</span>
            <span class="our-prices__price">100₽</span>
          </li>
        </ul>
        <h3 class="our-prices__subtitle">playstation 4</h3>

        <ul class="our-prices__list">
          <li class="our-prices__item">
            <span class="our-prices__text">30 минут</span>
            <span class="our-prices__price">100₽</span>
          </li>
          <li class="our-prices__item">
            <span class="our-prices__text">1 час</span>
            <span class="our-prices__price">200₽</span>
          </li>
        </ul>
        <p>* - Ежедневно проходят акции и скидки, следите за нашим instagram</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JSPrice'
}
</script>

<style lang="scss" scoped>
.our-prices {
  padding-top: 70px;
  position: relative;

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

  &__subtitle {
    text-align: center;
    margin-bottom: 25px;
  }

  &__list {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 80px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    border-bottom: 1px solid $grey;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
</style>
