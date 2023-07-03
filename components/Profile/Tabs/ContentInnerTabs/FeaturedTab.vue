<template>
    <div className="col-lg-12 col-md-12 col-sm-12 feature m-0 p-0">
        <!-- <p>{{ data.content }}</p> -->
        <template v-if="data.content_type == 'image'">
            <img :src="data.image_kit_id" alt="Content_Image" class="content_image" />
            <p class="content_desc" v-if="data.title.length > 0">
                {{ data.title }}
            </p>
            <span class=" accessibility_bar mt-2">
                <div class="d-flex justify-content-between px-4">
                    <span class="d-flex align-items-center gap-3">
                        <div class="img-box rounded-circle">
                            <img :src="UserSlider" alt="" />
                        </div>
                        <div class="img-box rounded-circle">
                            <img :src="TagSlider" alt="" />
                        </div>
                    </span>
                    <span class="d-flex align-items-center gap-2    " style="justify-self: flex-end;">
                        <span class="badge badge-pill rounded-4"
                            style="background-color: #3c78ea; font-weight: light; font-size: 1rem;">
                            Featured</span>
                        <div class="img-box rounded-circle">
                            <img :src="ImageIconSlider" alt="" />
                        </div>
                    </span>
                </div>
            </span>
        </template>
        <!-- <template v-if="data.content_type == 'link'">
            <img v-if="data.thumbnail_image_kit_id" :src="data.thumbnail_image_kit_id" alt="Content_Image" />
            <div v-else class="no-image-div"></div>
            <p class="content_desc">
                {{ data.title }}
            </p>
            <span class=" accessibility_bar mt-2">
                <div class="d-flex justify-content-between px-4">
                    <span class="d-flex align-items-center gap-3">
                        <div class="img-box rounded-circle">
                            <img :src="UserSlider" alt="" />
                        </div>
                        <div class="img-box rounded-circle">
                            <img :src="TagSlider" alt="" />
                        </div>
                    </span>
                    <span style="justify-self: flex-end;">
                        <div class="img-box rounded-circle">
                            <img :src="LinkWhite" alt="" />
                        </div>
                    </span>
                </div>
            </span>
        </template>
        <template v-if="data.content_type == 'image_gallery'">
            <swiper :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" :spaceBetween="10"
                class="mySwiper2">
                <swiper-slide v-for="(slide, index) in data.image_kit_ids" :key="index"><img :src="slide" /></swiper-slide>
            </swiper>
            <p class="content_desc">
                {{ data.title }}
            </p>
            <span class=" accessibility_bar mt-2">
                <div class="d-flex justify-content-between px-4">
                    <span class="d-flex align-items-center gap-3">
                        <div class="img-box rounded-circle">
                            <img :src="UserSlider" alt="" />
                        </div>
                        <div class="img-box rounded-circle">
                            <img :src="TagSlider" alt="" />
                        </div>
                    </span>
                    <span style="justify-self: flex-end;">
                        <div class="img-box rounded-circle">
                            <img :src="LinkWhite" alt="" />
                        </div>
                    </span>
                </div>
            </span>
        </template>
        <template v-if="data.content_type == 'video' && content?.image_kit_id != 'https://youtube.com/watch?v=UNkH1TQI7qo'">
            <template
                v-if="content?.image_kit_id?.startsWith('https://www.youtube.com') || content?.image_kit_id?.startsWith('https://youtu.be') || content?.image_kit_id?.startsWith('https://youtube.com')">
                <vue-plyr>
                    <div class="plyr__video-embed">
                        <iframe :src="content?.image_kit_id" allowfullscreen allowtransparency allow="autoplay"
                            :poster="content?.thumbnail_image_kit_id"></iframe>
                    </div>
                </vue-plyr>
            </template>
            <template v-if="content?.image_kit_id?.startsWith('https://vimeo')">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe
                        :src="`https://player.vimeo.com/video/${content?.image_kit_id?.replace('https://vimeo.com/', '')}?h=b8c796fff8&title=0&byline=0&portrait=0`"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </template>

        </template>
        <template v-if="data.content_type == 'text'">

            <div class="text-bg"></div>
            <div class="inner-text-wrapper">
                <div class="collection-images text-inner-collection text-white">
                    <p>
                        {{ data?.description || 'No data available' }}
                    </p>
                </div>
            </div>
            <span class="accessibility_bar mt-2">
                <div class="d-flex justify-content-between px-4">
                    <span class="d-flex align-items-center gap-3">
                        <div class="img-box rounded-circle">
                            <img :src="UserSlider" alt="" />
                        </div>
                        <div class="img-box rounded-circle">
                            <img :src="TagSlider" alt="" />
                        </div>
                    </span>
                    <span style="justify-self: flex-end;">
                        <div class="img-box rounded-circle">
                            <img :src="TextWhite" alt="" />
                        </div>
                    </span>
                </div>
            </span>
        </template> -->
    </div>
</template>
<script setup>
import UserSlider from "~/assets/images/user-slider.png"
import TagSlider from "~/assets/images/Tag-slider.png"
import LinkWhite from "~/assets/images/Link-white.png";
import ImageIconSlider from "~/assets/images/Image-icon-slider.png"
import TextWhite from "~/assets/images/textwhite.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Autoplay, Thumbs } from "swiper";
import { FeedResponse } from '../../../../models/FeedResponse/feedResponse';
defineProps({
    data: FeedResponse
})

const modules = [FreeMode, Autoplay, Thumbs];
const OpenUrl = (url) => {
    window.open(url, '_blank')

}
</script>
<style scoped lang="scss">
.feature {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;

    .img-box {
        width: 24px;
        height: 24px;
        background: rgba(0, 0, 0, 0.45);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .accessibility_bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    }

    .custom-btn {
        background: #262626;
        box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
        border-radius: 25px;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
        padding: 10px 16px;
        display: inline-block;
        width: 10% !important;
        border: none !important;
    }

    .content-div {
        height: 500px;
        position: relative;

        .content_image {
            height: 100%;
            width: 100%;
            object-fit: cover;
            position: relative;

        }

        .content_desc {
            position: absolute;
            bottom: 0;
            left: 10px;
            z-index: 1000;
            font-weight: 400;
            color: white;
            font-size: large;
        }

        .no-image-div {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: #8c8c8c;
        }

        .fadedbg {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(black, transparent);
            transform: rotate(180deg);
        }
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
        height: 100%;
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
}
</style>