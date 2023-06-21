<template>
    <swiper-slide class="custom-swiper">
        <img :src="data?.thumbnail_image_kit_id" class="bg_img" />
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :freeMode="true" :slidesPerView="2" :watchSlidesProgress="true"
            :modules="modules" class="mySwiper">
            <swiper-slide class="current-slide" v-for="(slide, index) in links" :key="index"
                @click="OpenLink(slide?.image_kit_id)">
                <div class="link_div">
                    <div class="link_img"><img :src="slide?.image_kit_ids[0]"></div>
                    <div class="link_body">
                        <h6 class="link_title">{{ slide?.title }}</h6>
                        <small class="link_desc">{{ slide?.description }}</small>
                    </div>
                </div>
            </swiper-slide>
            <h1>test</h1>
        </swiper>
    </swiper-slide>
</template>
<script setup lang="ts">
import { ref } from "vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { FeedResponse } from '../../models/FeedResponse/feedResponse';
defineProps({
    data: FeedResponse,
    links: Array<FeedResponse>
});
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
function OpenLink(link) {
    console.log(link)
    window.open(link, "_black")
}
</script>

<style scoped lang="scss">
.bg_img {
    height: 400px !important;
}

.swiper {
    width: 100%;
    height: 100%;
}

.custom-swiper {
    position: relative;
}

.swiper-slide.mySwiper {
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
    height: 60%;
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(transparent, black);

    .swiper-slide {
        width: 40% !important;
        opacity: 0.8;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }

        .link_div {
            width: 100%;
            height: 100%;
            background-color: #262626;
            border-radius: 6px;
            overflow: hidden;

            .link_img {
                height: 70%;
                width: 100%;
                border-bottom: 1px solid #cdd5e1;

                img {
                    display: block;
                    width: 100%;
                    object-fit: cover;
                }
            }

            .link_body {
                padding: 10px 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                .link_title {
                    margin-bottom: 5px;
                    color: #cdd5e1 !important;
                }

                .link_desc {
                    color: white;
                }
            }
        }

        img {
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
    }
}
</style>
