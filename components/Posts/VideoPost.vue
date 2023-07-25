<template>
  <div class="inner-tabs-wrapper">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-3">
        <div class="header-tabs-name-dot">
          <img :src="VideoIconBlack" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>{{ data?.title }}</p>
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
        {{ data?.description }}
      </p>
    </div>

    <div class="img-div">
      <template
        v-if="data?.image_kit_id?.startsWith('https://www.youtube.com') || data?.image_kit_id?.startsWith('https://youtu.be') || data?.image_kit_id?.startsWith('https://youtube.com')">
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe :src="data?.image_kit_id" allowfullscreen allowtransparency allow="autoplay"
              :poster="data?.thumbnail_image_kit_id"></iframe>
          </div>
        </vue-plyr>
      </template>
      <template v-if="data?.image_kit_id?.startsWith('https://vimeo')">
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe
            :src="`https://player.vimeo.com/video/${data?.image_kit_id?.replace('https://vimeo.com/', '')}?h=b8c796fff8&title=0&byline=0&portrait=0`"
            style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
      </template>

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
              <img :src="VideoIcon" alt="" />
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
import ShareTabImage from "~/public/assets/images/share-tabs.png";
import Messagetabs from "~/public/assets/images/message-tabs.png";
import bookmarket from "~/public/assets/images/bookmark-tabs.png";
import MenuTab from "~/public/assets/images/Menu_tabs.png";
import UserSlider from "~/public/assets/images/user-slider.png";
import TagSlider from "~/public/assets/images/Tag-slider.png";
import VideoIconBlack from "~/public/assets/images/videoblackicon.png";
import VideoIcon from "~/public/assets/images/video-icon.png";
import { usePostCreationTime } from "../../composables/getPostCreatedTime";
import { FeedResponse } from '../../models/FeedResponse/feedResponse';
defineProps({
  data: FeedResponse
})
</script>
<style scoped>
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
  