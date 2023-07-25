<template>
  <div v-for="(feed, index) in feedData" :key="index">
    <div class="inner-tabs-wrapper" v-if="feed?.image_gallery_type_value">
      <div class="inner-header-tabs d-flex justify-content-between">
        <div class="header-tabs-name d-flex align-items-center gap-1">
          <div>
            <img :src="ImageAlbum" alt="" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <p>{{ feed?.image_gallery_type_value?.length }}</p>
            <p>{{ feed?.title || "Image Gallery Name" }}</p>
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
      <div class="main-thums-Slider">
        <Thumbsgallery :slides="feed?.image_gallery_type_value" />
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
import Thumbsgallery from "./Thumbsgallery.vue";
import ShareTabImage from "~/public/assets/images/share-tabs.png";
import Messagetabs from "~/public/assets/images/message-tabs.png";
import TitleImage from "~/public/assets/images/title-img.png";
import ImageAlbum from "~/public/assets/images/image album.png";
import bookmarket from "~/public/assets/images/bookmark-tabs.png";
import MenuTab from "~/public/assets/images/Menu_tabs.png";
import { useStore } from "../store";
import { storeToRefs } from "pinia";
const { feedData } = storeToRefs(useStore());
</script>
<style scoped>
.profile-img {
  width: 60px;
  border-radius: 50%;
}
</style>
