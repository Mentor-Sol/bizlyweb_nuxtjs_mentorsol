
<template>
    <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
        <div className="contentWrapper bg-black">
            <div className="py-2 button-wrapper">
                <button class="custom-btn">Custom Button 1</button>
                <button class="custom-btn">Custom Button 1</button>
                <button class="custom-btn">Custom Button 1</button>
                <button class="custom-btn">Custom Button 1</button>
                <button class="custom-btn">Custom Button 1</button>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <template v-for="content in data?.content">
                        <FeaturedTab :data="content" v-if="content.is_featured" />
                        <div v-if="!content.is_featured && content.content_type != 'video_gallery' && content.content_type != 'audio' && content.content_type != 'audio_gallery' && content.content_type != null && content.content_type != 'link_gallery'"
                            className="col-12 col-md-6 col-lg-6 overflow-hidden p-0 m-0 content-div"
                            @click="OpenUrl(content.content_type, content.image_kit_id)">
                            <template v-if="content.content_type == 'image'">
                                <img :src="content.image_kit_id" alt="Content_Image" class="content_image" />
                                <p class="content_desc">
                                    {{ content.title }}
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
                                                <img :src="ImageIconSlider" alt="" />
                                            </div>
                                        </span>
                                    </div>
                                </span>
                            </template>
                            <template v-if="content.content_type == 'link'">
                                <img v-if="content.thumbnail_image_kit_id" :src="content.thumbnail_image_kit_id"
                                    alt="Content_Image" />
                                <div v-else class="no-image-div"></div>
                                <p class="content_desc">
                                    {{ content.title }}
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
                            <template v-if="content.content_type == 'image_gallery'">
                                <swiper :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                                    :spaceBetween="10" class="mySwiper2">
                                    <swiper-slide v-for="(slide, index) in content.image_kit_ids" :key="index"><img
                                            :src="slide" /></swiper-slide>
                                </swiper>
                                <p class="content_desc">
                                    {{ content.title }}
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
                            <template
                                v-if="content.content_type == 'video' && content?.image_kit_id != 'https://youtube.com/watch?v=UNkH1TQI7qo'">
                                <template
                                    v-if="content?.image_kit_id?.startsWith('https://www.youtube.com') || content?.image_kit_id?.startsWith('https://youtu.be') || content?.image_kit_id?.startsWith('https://youtube.com')">
                                    <vue-plyr>
                                        <div class="plyr__video-embed">
                                            <iframe :src="content?.image_kit_id" allowfullscreen allowtransparency
                                                allow="autoplay" :poster="content?.thumbnail_image_kit_id"></iframe>
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
                            <template v-if="content.content_type == 'text'">
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
                            </template>
                            <div class="fadedbg"
                                v-if="content.content_type != 'video' && content.content_type != 'video_gallery'">
                            </div>
                            {{ content.content_type }}
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FullBizCard } from '../../../models/ProfileData/FullBizCard';
import { ref } from "vue";
import FeaturedTab from "./ContentInnerTabs/FeaturedTab"
import UserSlider from "~/src/assets/images/user-slider.png"
import TagSlider from "~/src/assets/images/Tag-slider.png"
import LinkWhite from "~/src/assets/images/Link-white.png";
import ImageIconSlider from "~/src/assets/images/Image-icon-slider.png"
import TextWhite from "~/src/assets/images/textwhite.png";
import VideoIcon from "~/src/assets/images/video-icon.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Autoplay, Thumbs } from "swiper";
defineProps({
    data: FullBizCard
})

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Autoplay, Thumbs];
const OpenUrl = (content_type, url) => {
    if (content_type == 'link') window.open(url, '_blank')
    else return null;
}
</script>
<style scoped lang="scss">
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

.contentWrapper {
    border-bottom: 1px solid #333333;
    padding-bottom: 20px;

    .button-wrapper {
        justify-content: space-between;
        overflow-x: auto;
        width: 100%;
        white-space: nowrap;

        &::-webkit-scrollbar {
            display: none;
        }

        .custom-btn {
            background: #262626;
            // box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
            border-radius: 25px;
            font-size: 14px;
            color: #fff;
            padding: 10px 16px;
            width: 30% !important;
            border: none !important;
            margin-right: 20px;
            display: inline;
        }
    }

    .content-div {
        height: 500px;
        position: relative;
        cursor: pointer;

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
</style>