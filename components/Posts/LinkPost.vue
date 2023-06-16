<template>
  <div class="inner-tabs-wrapper" v-if="data?.link_type_value">
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
      </div>
    </div>
    <div class="tabs-desc d-flex">
      <p v-if="data?.description.length < maxlenght || more">
        {{ data?.description }}
      </p>
      <p v-if="!more && data?.description.lenth < maxlenght">
        {{ data?.description.toString().slice(0, maxlenght) + "...." }}
      </p>

      <button @click="seeMore(data?.description)" v-if="!more && data?.description.lenth > maxlenght"
        class="more_less_btn">
        see more
      </button>
      <button @click="seeLess(data?.description)" v-if="more" class="more_less_btn">
        see less
      </button>
    </div>
    <div class="img-div">
      <div v-if="data?.thumbnail_image_kit_id">
        <img :src="data?.thumbnail_image_kit_id" class="inner-img-collection" style="filter: blur(8px);" />
      </div>
      <div v-else class="no-data">
      </div>
      <div class="inner-description-wrapper">
        <a :href="data.link_type_value" target="_blank">{{
          data?.link_type_value
        }}</a>
        <p>{{ data?.title }}</p>
        <span>{{
          data?.description.toString().slice(0, 10) + "...."
        }}</span>
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
                <img :src="LinkWhite" alt="" />
              </div>
            </span>
          </div>
        </span>
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
import BlackImgVideo from "~/assets/images/Link.png";
import bookmarket from "~/assets/images/bookmark-tabs.png";
import MenuTab from "~/assets/images/Menu_tabs.png";
import UserSlider from "~/assets/images/user-slider.png";
import TagSlider from "~/assets/images/Tag-slider.png";
import LinkWhite from "~/assets/images/Link-white.png";

defineProps({
  data: Object
})

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
  