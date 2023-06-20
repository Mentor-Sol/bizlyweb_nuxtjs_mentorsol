<template>
  <div class="inner-tabs-wrapper">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-1">
        <div>
          <img :src="ImageAlbum" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>{{ data?.image_gallery_type_value?.length }}</p>
          <p>{{ data?.title || "Image Gallery Name" }}</p>
          <span>{{ usePostCreationTime(data?.created_on) }}</span>
        </div>
      </div>
      <div class="header-tabs-icons d-flex gap-4 align-items-center">
        <img :src="bookmarket" alt="" />
        <img :src="MenuTab" alt="" />
      </div>
    </div>
    <div class="Tabs-title d-flex align-items-center gap-3">
      <div>
        <img :src="data?.owner.image" alt="" class="profile-img" />
      </div>
      <div class="Tabs-title-name">
        <h5>
          {{ data?.owner.first_name + " " + data?.owner.last_name }}
          <span>{{ data?.owner.pronouns?.[0] ? "(" + data?.owner.pronouns?.[0] + ")" : "" }}
          </span>
        </h5>
        <div class="d-flex align-items-center gap-3 Tabs-feilds" v-for="(role, index) in data?.owner.roles" :key="index">
          <span>{{ role }}</span>
        </div>
        <!-- <p>Camera Operator <span>at</span> Paramount Pictures</p> -->
      </div>
    </div>
    <div class="tabs-desc">
      <p>
        {{ data?.description }}
      </p>
    </div>
    <div class="main-thums-Slider">
      <Thumbsgallery :slides="data?.image_kit_ids" @count="getCount" />
      <span class=" accessibility_bar mt-2" style="z-index: 1;">
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
    </div>
    <div class="inner-footer-tabs d-flex justify-content-around">
      <div class="footer-messages d-flex align-items-center gap-2">
        <img :src="Messagetabs" alt="" />
        <p>bizMessage</p>
      </div>
      <div class="footer-share d-flex align-items-center gap-2">
        <img :src="ShareTabImage" alt="" />
        <p>Share</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Thumbsgallery from "./Thumbsgallery.vue";
import ShareTabImage from "~/assets/images/share-tabs.png";
import Messagetabs from "~/assets/images/message-tabs.png";
import ImageAlbum from "~/assets/images/image album.png";
import bookmarket from "~/assets/images/bookmark-tabs.png";
import MenuTab from "~/assets/images/Menu_tabs.png";
import UserSlider from "~/assets/images/user-slider.png"
import TagSlider from "~/assets/images/Tag-slider.png"
import ImageIconSlider from "~/assets/images/Image-icon-slider.png"
import { FeedResponse } from "../../models/feedResponse";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
defineProps({
  data: FeedResponse
})
function getCount(val) {
  if (val) {
    return val;
  }
  return 1;
}
</script>
<style scoped>
.img-div {
  position: relative;
}

.accessibility_bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
  