<template>
  <div v-for="(feed, index) in feedData" :key="index">
    <div class="inner-tabs-wrapper" v-if="feed?.link_type_value">
      <div class="inner-header-tabs d-flex justify-content-between">
        <div class="header-tabs-name d-flex align-items-center gap-3">
          <div class="header-tabs-name-dot">
            <img :src="BlackImgVideo" alt="" />
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
          <!-- <p>CEO <span>at</span> Biz Technologies</p> -->
        </div>
      </div>
      <div class="tabs-desc d-flex">
        <p v-if="feed?.description.length < maxlenght || more">
          {{ feed?.description }}
        </p>
        <p v-if="!more && feed?.description.lenth < maxlenght">
          {{ feed?.description.toString().slice(0, maxlenght) + "...." }}
        </p>

        <button @click="seeMore(feed?.description)" v-if="!more && feed?.description.lenth > maxlenght"
          class="more_less_btn">
          see more
        </button>
        <button @click="seeLess(feed?.description)" v-if="more" class="more_less_btn">
          see less
        </button>
      </div>
      <div class="main-thums-Slider main-thums-Slider-second">
        <div>
          <img :src="SecondSectionImg" alt="" />
          <div class="inner-description-wrapper">
            <a :href="feed.link_type_value" target="_blank">{{
              feed?.link_type_value
            }}</a>
            <p>{{ feed?.title }}</p>
            <span>{{
              feed?.description.toString().slice(0, 10) + "...."
            }}</span>
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
            <div class="img-box-value d-flex align-items-center gap-2">
              <img :src="VideoAlbum" alt="" />
              <p>5</p>
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
import SecondSectionImg from "~//assets/images/eightSectionimg.png";
import ShareTabImage from "~//assets/images/share-tabs.png";
import Messagetabs from "~//assets/images/message-tabs.png";
import BlackImgVideo from "~/assets/images/Link.png";
import bookmarket from "~//assets/images/bookmark-tabs.png";
import MenuTab from "~//assets/images/Menu_tabs.png";
import UserSlider from "~/assets/images/user-slider.png";
import TagSlider from "~/assets/images/Tag-slider.png";
import VideoAlbum from "~/assets/images/Link-white.png";
import { useStore } from "../store";
import { storeToRefs } from "pinia";
import { usePostCreationTime } from "../composables/getPostCreatedTime";
const { feedData } = storeToRefs(useStore());
const maxlenght = useState(() => 20);
const more = useState(() => false);
const seeMore = (text) => {
  maxlenght.value = text.length;
  more.value = true;
};
const seeLess = (text) => {
  maxlenght.value = 3;
  more.value = false;
};
</script>
<style scoped>
.profile-img {
  width: 60px;
  border-radius: 50%;
}
</style>
