<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero__inner">
          <h1 class="hero__title title">
            самый большой батутный центр в Осетии
          </h1>
        </div>
      </div>
    </section>
    <section class="we-have">
      <div class="container">
        <div class="we-have__inner">
          <h2 class="we-have__title title">что у нас есть</h2>
          <ul class="we-have__list">
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/1.webp"
                  alt="батуты"
                />
              </div>
              <p>спортивные батуты и батуты для начинающих</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/2.webp"
                  alt="большой батут"
                />
              </div>
              <p>большой батут 5x5 метров</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/3.webp"
                  alt="спортивные секции"
                />
              </div>
              <p>спортивные секции для детей и взрослых</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/fitness.webp"
                  alt="фитнес на батутах"
                />
              </div>
              <p><span class="new">new</span> фитнес на батутах</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/pit.webp"
                  alt="поролоновая яма"
                />
              </div>
              <p>огромная поролоновая яма для безопасных приземлений</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/comand.webp"
                  alt="команда персональных инструкторов"
                />
              </div>
              <p>команда профессиональных инструкторов</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/ps4.webp"
                  alt="playstation 4"
                />
              </div>
              <p>playstation 4</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/tennis.webp"
                  alt="теннисный стол"
                />
              </div>
              <p>теннисный стол</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/games.webp"
                  alt="настольные игры"
                />
              </div>
              <p>настольные игры</p>
            </li>
            <li class="we-have__item">
              <div class="we-have__box">
                <img
                  class="we-have__img"
                  src="@/assets/images/we-have/6.webp"
                  alt="мероприятия и праздники"
                />
              </div>
              <p>организация мероприятий и праздников</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JSHome'
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('@/assets/images/hero/hero-img.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba($blue-900, 0.1);
    position: absolute;
    z-index: -1;
  }

  &__inner {
    min-height: calc(100vh - 177px);
    display: flex;
    align-items: center;

    @include w768 {
      min-height: calc(100vh - 95px);
    }

    @include w576 {
      min-height: calc(100vh - 92px);
    }
  }

  &__title {
    max-width: 600px;
    font-size: 60px;
    color: $purple;
    text-shadow: 5px 6px 3px $black;

    @include w576 {
      font-size: 48px;
    }
  }
}

.we-have {
  padding: 60px 0 30px;

  &__title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 70px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-column-gap: 200px;
    row-gap: 50px;

    @include w1530 {
      grid-column-gap: 155px;
    }

    @include w1200 {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-column-gap: 50px;
    }

    @include w992 {
      grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
    }
  }

  &__item {
    font-size: 18px;
    max-width: 500px;
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
  }

  &__box {
    display: inline-block;
    overflow: hidden;
    margin-bottom: 15px;
    border-radius: 20px;
  }

  &__img {
    width: 100%;
    height: 330px;
    object-fit: cover;
    transition: transform 0.3s;

    @include w1200 {
      height: 280px;
    }

    &:hover {
      transform: scale(1.07);
    }
  }
}
</style>
