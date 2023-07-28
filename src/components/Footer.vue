<template>
  <footer
    class="footer"
    id="footer"
  >
    <div class="container">
      <div class="footer__inner">
        <div class="footer__contacts">
          <h2 class="footer__title title">контакты</h2>

          <address class="footer__address">
            <p>Работаем по будням с 12.00 до 22.00</p>
            <p>По выходным и праздникам с 10.00 до 22.00</p>

            <p>
              <span class="footer__text">Адрес:</span>
              ул. Морских Пехотинцев, 10А
            </p>

            <a
              class="footer__phone animation-icon"
              href="tel:+79969172670"
              ><span class="footer__text">Телефон: </span>8 (996) 917-26-70
            </a>

            <j-s-social />
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/242978832886"
              width="150"
              height="50"
              frameborder="0"
              style="margin-top: 15px"
            />
          </address>
        </div>
        <yandex-map
          :coords="map.coords"
          :zoom="map.zoomMap"
        >
          <ymap-marker
            :coords="placemark.coords"
            :icon="placemark.icon"
            marker-id="123"
            hint-content="Just Sky"
          />
        </yandex-map>
      </div>
    </div>
  </footer>
</template>

<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'
import JSSocial from '@/components/Social'
export default {
  name: 'JSFooter',
  components: {
    JSSocial,
    yandexMap,
    ymapMarker
  },
  data() {
    return {
      map: {
        coords: [43.03896870885594, 44.6334173711635],
        zoomMap: window.matchMedia('(max-width: 576px)').matches ? 16 : 17
      },
      placemark: {
        coords: [43.0386539149548, 44.63097656095994],
        icon: {
          layout: 'default#imageWithContent',
          imageHref: require('@/assets/images/icons/map-location1.svg'),
          imageSize: [60, 60],
          imageOffset: [-33, -60]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 60px 0 30px;
  background-color: $sweetie;

  &__inner {
    display: flex;
    justify-content: space-between;

    @include w768 {
      flex-direction: column;
    }
  }

  &__contacts {
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 30px;
    color: $yellow;
    text-shadow: 3px 3px 1px $black;
  }

  &__address {
    color: $white;
    text-shadow: 3px 3px 1px $black;
    width: fit-content;

    p {
      margin-bottom: 9px;

      &:nth-child(2) {
        margin-bottom: 20px;
      }
    }
  }

  &__text {
    font-weight: 600;
    color: $yellow;
  }

  &__phone {
    display: block;
    padding: 11px 0;
    margin-bottom: 9px;

    @include w768 {
      &:hover {
        transform: scale(1.02);
      }
    }
  }
}

.ymap-container {
  max-width: 600px;
  width: 100%;
  height: 400px;
}
</style>
