<template>
    <swiper-slide style="overflow: none;"><img :src="data?.thumbnail_image_kit_id" class="bg_img" /></swiper-slide>
    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :freeMode="true" :watchSlidesProgress="true" :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="(slide, index) in links" :key="index">
            <div class="link_div">
                <div class="link_img" :style="'backgroup-image:url(' + slide?.image_kit_ids[0] + ')'"></div>
                <div class="link_body">
                    <h4 class="link_title">{{ slide?.title }}</h4>
                    <p class="link_desc">{{ slide?.description }}</p>
                </div>
            </div>
            <!-- <p></p>
            <p></p> -->
        </swiper-slide>
    </swiper>
</template>
<script setup>
import { ref } from "vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
defineProps({
    links: Array,
    data: Object
});
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];

</script>

<style>
.bg_img {
    height: 200px !important;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.main-thums-Slider .swiper-wrapper {
    position: relative;
    overflow: unset !important;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-prev {
    display: block !important;
    color: black !important;
}

.swiper-button-next {
    display: block !important;
    color: black !important;
}
</style>
