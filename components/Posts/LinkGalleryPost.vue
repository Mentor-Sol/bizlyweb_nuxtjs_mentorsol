<template>
  <div class="inner-tabs-wrapper" v-for="feed in data">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-1">
        <div>
          <img :src="BlackImgVideo" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>{{ feed?.children.length }}</p>
          <p>{{ feed?.title || "Image name" }}</p>
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
        <img :src="feed?.owner.image" alt="" class="profile-img" />
      </div>
      <div class="Tabs-title-name">
        <h5>
          {{ feed?.owner.first_name + " " + feed?.owner.last_name }}
          <span>{{ feed?.owner.pronouns?.[0] ? "(" + feed?.owner.pronouns?.[0] + ")" : "" }}
          </span>
        </h5>
        <div class="d-flex align-items-center gap-3 Tabs-feilds" v-for="(role, index) in feed?.owner.roles" :key="index">
          <span>{{ role }}</span>
        </div>
      </div>
    </div>
    <div class="tabs-desc">
      <p>
        {{ feed?.owner?.description }}
      </p>
    </div>
    <LinkThumbnails :links="feed?.children" :data="feed" />
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
import ShareTabImage from "~/src/assets/images/share-tabs.png";
import Messagetabs from "~/src/assets/images/message-tabs.png";
import BlackImgVideo from "~/src/assets/images/Link.png";
import bookmarket from "~/src/assets/images/bookmark-tabs.png";
import MenuTab from "~/src/assets/images/Menu_tabs.png";
import LinkThumbnails from "./LinkThumbnails.vue";
import { FeedResponse } from '../../models/FeedResponse/feedResponse';

defineProps({
  data: FeedResponse
})
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
</style>
  