<template>
  <section class="gallery">
    <div class="container">
      <div class="gallery__inner">
        <ul class="gallery__list-main">
          <li class="gallery__item-main">
            <button class="gallery__btn-arrow" @click="prevImg">
              <svg
                class="gallery__arrow"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width="44px"
                height="44px"
              >
                <g>
                  <path
                    d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"
                  />
                </g>
              </svg>
            </button>
          </li>
          <li class="gallery__item-main">
            <img class="gallery__img-main" :src="currentImg" />
          </li>
          <li class="gallery__item-main">
            <button class="gallery__btn-arrow" @click="nextImg">
              <svg
                class="gallery__arrow gallery__arrow--right"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width="44px"
                height="44px"
              >
                <g>
                  <path
                    d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"
                  />
                </g>
              </svg>
            </button>
          </li>
        </ul>
        <ul class="gallery__list">
          <li
            class="gallery__item"
            v-for="image in imagesFilter"
            :key="image.id"
            @click="changeCurrentImg(image.id)"
          >
            <button class="gallery__btn">
              <img class="gallery__img" :src="image.src" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JSGallery',
  data() {
    return {
      widthScreen: window.innerWidth,
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
        {id: 11, src: require('@/assets/images/gallery/12.jpg')}
      ],
      currentImgNumber: 2
    }
  },
  computed: {
    currentImg() {
      return this.images[this.currentImgNumber].src
    },
    imagesFilter() {
      if (this.widthScreen > 940) {
        if (this.currentImgNumber < 2) {
          return [
            ...this.images.slice(
              this.images.length - 2 + this.currentImgNumber
            ),
            ...this.images.slice(0, this.currentImgNumber + 3)
          ]
        }
        if (
          this.currentImgNumber >= 2 &&
          this.currentImgNumber < this.images.length - 3
        ) {
          return this.images.slice(
            this.currentImgNumber - 2,
            this.currentImgNumber + 3
          )
        }
        return [
          ...this.images.slice(this.currentImgNumber - 2),
          ...this.images.slice(
            0,
            (this.images.length - this.currentImgNumber - 3) * -1
          )
        ]
      }

      if (this.currentImgNumber === 0) {
        return [
          this.images[this.images.length - 1],
          ...this.images.slice(0, this.currentImgNumber + 2)
        ]
      }
      if (
        this.currentImgNumber >= 1 &&
        this.currentImgNumber < this.images.length - 1
      ) {
        return this.images.slice(
          this.currentImgNumber - 1,
          this.currentImgNumber + 2
        )
      }
      return [...this.images.slice(this.currentImgNumber - 1), this.images[0]]
    }
  },
  methods: {
    changeCurrentImg(number) {
      this.currentImgNumber = number
    },
    nextImg() {
      const isLastImg = this.currentImgNumber === this.images.length - 1
      if (isLastImg) {
        this.currentImgNumber = 0
      } else {
        this.currentImgNumber++
      }
    },
    prevImg() {
      const isFirstImg = this.currentImgNumber === 0
      if (isFirstImg) {
        this.currentImgNumber = this.images.length - 1
      } else {
        this.currentImgNumber--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  &__list-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__arrow {
    fill: $black;
    transition: fill 0.3s;
  }

  &__btn-arrow:hover .gallery__arrow {
    fill: $purple;
  }

  &__arrow {
    width: 44px;
    height: 44px;
    &--right {
      transform: rotateZ(180deg);
    }
  }

  &__img-main {
    max-width: 1000px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    column-gap: 15px;
  }

  &__img {
    max-width: 170px;
    height: 113px;
    @include w576 {
      height: 70px;
    }
  }
}
</style>
