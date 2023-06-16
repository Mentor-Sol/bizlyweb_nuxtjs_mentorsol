<template>
  <div class="inner-tabs-wrapper" v-if="feed?.video_type_value">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-3">
        <div class="header-tabs-name-dot">
          <img :src="VideoIconBlack" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>{{ feed?.title }}</p>
          <span>{{ usePostCreationTime(feed?.created_on) }}</span>
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
        <h5>
          {{ feed?.first_name + " " + feed?.last_name }}
          <span>{{ feed?.pronouns?.[0] ? "(" + feed?.pronouns?.[0] + ")" : "" }}
          </span>
        </h5>
        <div class="d-flex align-items-center gap-3 Tabs-feilds" v-for="(role, index) in feed?.roles" :key="index">
          <span>{{ role }}</span>
        </div>
        <!-- <p>Camera Operator <span>at</span> Paramount Pictures</p> -->
      </div>
    </div>
    <div class="tabs-desc">
      <p>
        {{ feed?.description }}
      </p>
    </div>
    <div class="main-thums-Slider main-thums-Slider-second">
      <template v-if="feed?.video_type_value.startsWith('https://www.youtube.com')">
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe :src="feed?.video_type_value" allowfullscreen allowtransparency allow="autoplay"
              :poster="feed?.thumbnail_image_kit_id"></iframe>
          </div>
        </vue-plyr>
      </template>
      <template v-if="!feed?.video_type_value.startsWith('https://www.youtube.com')">
        <video :src="feed?.video_type_value" controls :poster="feed?.thumbnail_image_kit_id"></video>
      </template>
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
          <div class="img-box-value video-img-box d-flex align-items-center gap-2">
            <img :src="VideoIcon" alt="" />
            <p>02:34</p>
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
</template>

<script setup>
import ShareTabImage from "~/assets/images/share-tabs.png";
import Messagetabs from "~/assets/images/message-tabs.png";
import bookmarket from "~/assets/images/bookmark-tabs.png";
import MenuTab from "~/assets/images/Menu_tabs.png";
import UserSlider from "~/assets/images/user-slider.png";
import TagSlider from "~/assets/images/Tag-slider.png";
import VideoIconBlack from "~/assets/images/videoblackicon.png";
import VideoIcon from "~/assets/images/video-icon.png";
import { usePostCreationTime } from "../../composables/getPostCreatedTime";

defineProps({
  data: Object
})
</script>
<style>
.img-div {
  position: relative;
}

video {
  width: 100%;
  height: 100%;
}

.accessibility_bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
  