<template>
  <div v-for="(feed, index) in feedData" :key="index">
    <div class="inner-tabs-wrapper" v-if="feed?.text_type_value">
      <div class="inner-header-tabs d-flex justify-content-between">
        <div class="header-tabs-name d-flex align-items-center gap-3">
          <div class="header-tabs-name-dot">
            <img :src="BlackImgVideo" alt="" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <p>{{ feed?.title }}</p>
            <span>5d</span>
          </div>
        </div>
        <div class="header-tabs-icons d-flex gap-4 align-items-center">
          <img :src="bookmarket" alt="" />
          <img :src="MenuTab" alt="" />
        </div>
      </div>
      <div class="Tabs-title d-flex align-items-center gap-3">
        <div>
          <img :src="feed?.image" alt="" class="profile-img" />
        </div>
        <div class="Tabs-title-name">
          <h5>{{ feed?.title }} <span>(He/Him)</span></h5>
          <div
            class="d-flex align-items-center gap-3 Tabs-feilds"
            v-for="(role, index) in feed?.roles"
            :key="index"
          >
            <span>{{ role }}</span>
          </div>
          <!-- <p>CEO <span>at</span> Biz Technologies</p> -->
        </div>
      </div>
      <div class="tabs-desc">
        <p>
          {{ feed?.description }}
        </p>
      </div>
      <div
        class="main-thums-Slider main-thums-Slider-second collection-thums-slider"
      >
        <div>
          <img
            :src="feed?.image || SecondSectionImg"
            alt=""
            class="inner-img-collection"
          />
          <div class="inner-text-wrapper">
            <div class="collection-images text-inner-collection">
              <p>
                {{ feed?.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between slider-inner-icons">
          <div class="d-flex align-items-center gap-3">
            <div class="img-box">
              <img :src="UserSlider" alt="" />
            </div>
            <div class="img-box">
              <img :src="TagSlider" alt="" />
            </div>
          </div>
          <div>
            <div class="img-box d-flex align-items-center gap-2">
              <img :src="VideoAlbum" alt="" />
            </div>
          </div>
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
import SecondSectionImg from "~//assets/images/tenthbgimg.png";
import ShareTabImage from "~//assets/images/share-tabs.png";
import Messagetabs from "~//assets/images/message-tabs.png";
import BlackImgVideo from "~/assets/images/textblack.png";
import bookmarket from "~//assets/images/bookmark-tabs.png";
import MenuTab from "~//assets/images/Menu_tabs.png";
import UserSlider from "~/assets/images/user-slider.png";
import TagSlider from "~/assets/images/Tag-slider.png";
import VideoAlbum from "~/assets/images/textwhite.png";
import { useStore } from "../store";
import { storeToRefs } from "pinia";
const { feedData } = storeToRefs(useStore());
</script>
<style>
.profile-img {
  width: 60px;
  border-radius: 50%;
}
</style>
