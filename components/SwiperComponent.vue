<template>
    <div>
        <Swiper :height="300" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
            :effect="'creative'" :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
            <SwiperSlide v-for="(slide, idx) in images" :key="idx">
                <img :src="slide" className=" five_feature_img" />
                <div className="subContent">
                    <div className="imgNumber d-flex">
                        <img :src="MultipleImg" alt=" MultipleImg" />

                        <span>{{ idx + 1 }}/{{ images.length }}</span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>

    <p className="subContentDesc">Title Goes here until it runs out of space.</p>
</template>
<script setup>

import MultipleImg from "~/src/assets/images/multipleImg.svg";

const props = defineProps({
    images: Array
})



</script>
