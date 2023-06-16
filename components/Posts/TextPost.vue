<template>
  <div class="inner-tabs-wrapper" v-if="data?.text_type_value">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-3">
        <div class="header-tabs-name-dot">
          <img :src="BlackImgVideo" alt="" />
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
        <img :src="data?.image" alt="" class="profile-img" />
      </div>
      <div class="Tabs-title-name">
        <h5>
          {{ data?.first_name + " " + data?.last_name }}
          <span>{{ data?.pronouns?.[0] ? "(" + data?.pronouns?.[0] + ")" : "" }}
          </span>
        </h5>
        <div class="d-flex align-items-center gap-3 Tabs-feilds" v-for="(role, index) in data?.roles" :key="index">
          <span>{{ role }}</span>
        </div>
        <!-- <p>CEO <span>at</span> Biz Technologies</p> -->
      </div>
    </div>
    <div class="tabs-desc">
      <p>
        {{ data?.description }}
      </p>
    </div>
    <div class="img-div">
      <div v-if="data?.thumbnail_image_kit_id">
        <img :src="data?.thumbnail_image_kit_id" class="inner-img-collection" />
      </div>
      <div v-else class="no-data">
      </div>
      <div class="inner-text-wrapper">
        <div class="collection-images text-inner-collection">
          <p>
            {{ data?.description }}
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
import BlackImgVideo from "~/assets/images/textblack.png";
import bookmarket from "~/assets/images/bookmark-tabs.png";
import MenuTab from "~/assets/images/Menu_tabs.png";
import UserSlider from "~/assets/images/user-slider.png";
import TagSlider from "~/assets/images/Tag-slider.png";
import TextWhite from "~/assets/images/textwhite.png";

defineProps({
  data: Object
})
</script>
<style>
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
  