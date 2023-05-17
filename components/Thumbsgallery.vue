<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div class="d-flex justify-content-between slider-inner-icons">
            <div class="d-flex align-items-center gap-3">
                <div class="img-box">
                    <img src="../assets/images/user-slider.png" alt="">

                </div>
                <div class="img-box">
                    <img src="../assets/images/Tag-slider.png" alt="">

                </div>
            </div>
            <div>
                <div class="img-box">
                    <img src="../assets/images/Image-icon-slider.png" alt="">

                </div>
            </div>
          </div>
          </swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div class="d-flex justify-content-between slider-inner-icons">
            <div class="d-flex align-items-center gap-3">
                <div class="img-box">
                    <img src="../assets/images/user-slider.png" alt="">

                </div>
                <div class="img-box">
                    <img src="../assets/images/Tag-slider.png" alt="">

                </div>
            </div>
            <div>
                <div class="img-box">
                    <img src="../assets/images/Image-icon-slider.png" alt="">

                </div>
            </div>
          </div></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div class="d-flex justify-content-between slider-inner-icons">
            <div class="d-flex align-items-center gap-3">
                <div class="img-box">
                    <img src="../assets/images/user-slider.png" alt="">

                </div>
                <div class="img-box">
                    <img src="../assets/images/Tag-slider.png" alt="">

                </div>
            </div>
            <div>
                <div class="img-box">
                    <img src="../assets/images/Image-icon-slider.png" alt="">

                </div>
            </div>
          </div>
          </swiper-slide
      >
      <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div class="d-flex justify-content-between slider-inner-icons">
            <div class="d-flex align-items-center gap-3">
                <div class="img-box">
                    <img src="../assets/images/user-slider.png" alt="">

                </div>
                <div class="img-box">
                    <img src="../assets/images/Tag-slider.png" alt="">

                </div>
            </div>
            <div>
                <div class="img-box">
                    <img src="../assets/images/Image-icon-slider.png" alt="">

                </div>
            </div>
          </div>
          </swiper-slide
      >
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
      >
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  
  import "swiper/css/free-mode"
  import "swiper/css/navigation"
  import "swiper/css/thumbs"
  
  
  
  // import required modules
  import {FreeMode,Navigation,Thumbs} from 'swiper';
  
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      let thumbsSwiper = null;
  
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper = swiper;
      }
  
      return {
  
        modules: [FreeMode,Navigation,Thumbs],
      };
    }
  }
  </script>
  