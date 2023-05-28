<template>
  <div v-for="(feed, index) in feedData" :key="index">
    <div class="inner-tabs-wrapper mb-3" v-if="feed?.image_type_value">
      <div class="inner-header-tabs d-flex justify-content-between">
        <div class="header-tabs-name d-flex align-items-center gap-3">
          <div class="header-tabs-name-dot">
            <img :src="BlackVideoIcon" alt="" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <p>{{ feed?.title || "Image name" }}</p>
            <span>5d</span>
          </div>
        </div>
        <div class="header-tabs-icons d-flex gap-4 align-items-center">
          <img :src="bookmarket" alt="" />
          <img :src="MenuTab" alt="" />
        </div>
      </div>
      <div class="Tabs-title d-flex align-items-center gap-3">
        <img :src="ManTitleImage" alt="" />
        <div class="Tabs-title-name">
          <h5>{{ feed?.first_name }} <span>(He/Him)</span></h5>
          <div class="d-flex align-items-center gap-3 Tabs-feilds">
            <span>Producer</span>
            <span>Writer</span>
            <span>Director</span>
          </div>
          <p>Camera Operator <span>at</span> Paramount Pictures</p>
        </div>
      </div>
      <div class="tabs-desc">
        <p>
          {{ feed?.description }}
        </p>
      </div>
      <div class="main-thums-Slider main-thums-Slider-second">
        <img :src="feed?.image_type_value" alt="" class="feed_img" />
        <div class="d-flex justify-content-between slider-inner-icons">
          <div class="d-flex align-items-center gap-3">
            <div class="img-box">
              <img :src="UserSlider" alt="" />
            </div>
            <div class="img-box">
              <img :src="TagSlider" alt="" />
            </div>
          </div>
          <!-- <div class="d-flex gap-2">
            <div class="img-box">
              <img :src="VolumeIcon" alt="" />
            </div>
            <div
              class="img-box-value video-img-box d-flex align-items-center gap-2"
            >
              <img :src="whiteVideoIcon" alt="" />
              <p>02:34</p>
            </div>
          </div> -->
        </div>
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
  </div>
</template>
<script setup>
import fourthSectionImg from "~//assets/images/fourth-section-img.png";
import ShareTabImage from "~//assets/images/share-tabs.png";
import Messagetabs from "~//assets/images/message-tabs.png";
import ManTitleImage from "~//assets/images/manImage.png";
import BlackVideoIcon from "~/assets/images/videoblackicon.png";
import bookmarket from "~//assets/images/bookmark-tabs.png";
import MenuTab from "~//assets/images/Menu_tabs.png";
import UserSlider from "~/assets/images/user-slider.png";
import TagSlider from "~/assets/images/Tag-slider.png";
import whiteVideoIcon from "~/assets/images/whiteVideoIcon.png";
import VolumeIcon from "~/assets/images/volumeicon.png";
import { useStore } from "../store";
import { storeToRefs } from "pinia";
const { feedData } = storeToRefs(useStore());
</script>
<style>
.feed_img {
  width: 100%;
  height: 100%;
}
</style>
