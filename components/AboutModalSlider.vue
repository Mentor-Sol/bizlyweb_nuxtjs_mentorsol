<template>
    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
        class="mySwiper2">
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" />

        </swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" />

        </swiper-slide>
    </swiper>
    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true"
        :modules="modules" class="mySwiper">
        <div class="d-flex justify-content-between slider-inner-icons">
            <div class="d-flex align-items-center gap-5">
                <div class="img-box">
                    <img :src="UserSlider" alt="" />
                </div>
                <div class="img-box">
                    <img :src="TagSlider" alt="" />
                </div>
                <div class="img-box">
                    <img :src="ImageIconSlider" alt="" />
                </div>
            </div>
        </div>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
        <swiper-slide class="add-plus-img">
            <div>
                <img :src="ImageIconPlus" alt="" />

            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        let thumbsSwiper = null;

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper = swiper;
        };

        return {
            modules: [FreeMode, Navigation, Thumbs],
        };
    },
};
</script>
<script setup>
import UserSlider from "~/src/assets/images/delete.png";
import TagSlider from "~/src/assets/images/pencil.png";
import ImageIconSlider from "~/src/assets/images/change.png";
import ImageIconPlus from "~/src/assets/images/plus.png";

</script>
     
<style lang="scss" scoped>
.mySwiper {
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    justify-content: center;
    width: 100%;
    padding: 16px;
    align-items: center;
    left: 0;
    bottom: 0;



    .add-plus-img {
        margin-right: 10px;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #FFFFFF;
        border-radius: 8px;
    }

    .swiper-slide {

        margin-right: 8px;

    }
}

.swiper-wrapper {
    width: auto !important;

}
</style>