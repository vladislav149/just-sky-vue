<template>
  <section class="our-prices">
    <div class="container">
      <div class="our-prices__inner">
        <h2 class="our-prices__title title">price&nbsp;list<sup>*</sup></h2>
        <article
          v-for="price in prices"
          :key="price.id"
        >
          <h3 class="our-prices__subtitle">{{ price.title }}</h3>

          <ul class="our-prices__list">
            <li
              class="our-prices__item"
              v-for="item in price.list"
            >
              <span
                class="our-prices__text"
                v-html="item.text"
              />
              <span class="our-prices__price">{{ item.price }}</span>
            </li>
          </ul>
        </article>
        <p>* - Ежедневно проходят акции и скидки, следите за нашим instagram</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JSPrice',
  data() {
    return {
      prices: [
        {
          id: 0,
          title: 'свободное посещение',
          list: [
            {
              text: '30 минут',
              price: '250₽'
            },
            {
              text: '1 час',
              price: '350₽'
            },
            {
              text: '2 час',
              price: '600₽'
            },
            {
              text: 'безлимит',
              price: '800₽'
            }
          ]
        },
        {
          id: 1,
          title: 'тренировки с тренером',
          list: [
            {
              text: '30 минут',
              price: '600₽'
            },
            {
              text: '1 час',
              price: '900₽'
            },
            {
              text: '2 часа',
              price: '1400₽'
            }
          ]
        },
        {
          id: 2,
          title: 'абонементы',
          list: [
            {
              text: 'абонемент на свободные посещения (30&nbsp;дней)',
              price: '3500₽'
            },
            {
              text: 'абонемент с тренером (8&nbsp;занятий)',
              price: '2500₽'
            },
            {
              text: 'абонемент с тренером (12&nbsp;занятий)',
              price: '3500₽'
            }
          ]
        },
        {
          id: 3,
          title: 'аренда',
          list: [
            {
              text: 'аренда зала на 1 час',
              price: '5000₽'
            },
            {
              text: 'аренда зала на 2 часа',
              price: '8000₽'
            },
            {
              text: 'каждый следующий час',
              price: '+3000₽'
            },
            {
              text: 'аренда зала на всю ночь (23:00-7:00)',
              price: '5000₽'
            },
            {
              text: 'аренда зала на весь день (12:00-22:00)',
              price: "20'000₽"
            }
          ]
        },
        {
          id: 5,
          title: 'теннисный стол',
          list: [
            {
              text: '30 минут',
              price: '50₽'
            },
            {
              text: '1 час',
              price: '100₽'
            }
          ]
        },
        {
          id: 6,
          title: 'playstation 4',
          list: [
            {
              text: '30 минут',
              price: '100₽'
            },
            {
              text: '1 час',
              price: '200₽'
            }
          ]
        },
        {
          id: 7,
          title: 'напитки',
          list: [
            {
              text: 'чай',
              price: '50₽'
            },
            {
              text: 'кофе американо',
              price: '100₽'
            },
            {
              text: 'сертификат на безлимитный кофе',
              price: '500₽'
            }
          ]
        }
      ]
    }
  }
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
