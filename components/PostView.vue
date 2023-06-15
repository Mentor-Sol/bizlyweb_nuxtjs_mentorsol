<template>
    <div v-for="(feed, index) in feedData" :key="index">
        <!-- <p>{{ feed.content_type }}</p> -->
        <template v-if="feed?.content_type == 'image' && feed.is_gallery == false">
            <div class="inner-tabs-wrapper mb-3" v-if="feed?.image_type_value">
                <div class="inner-header-tabs d-flex justify-content-between">
                    <div class="header-tabs-name d-flex align-items-center gap-3">
                        <div class="header-tabs-name-dot">
                            <img :src="BlackImgIcon" alt="" />
                        </div>
                        <div class="d-flex align-items-center gap-3">
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
                    <img :src="feed?.image" alt="" class="profile-img" />
                    <div class="Tabs-title-name">
                        <h5>
                            {{ feed?.first_name + " " + feed?.last_name }}
                            <span v-if="feed.owner?.pronouns.length">{{ `(${feeb.owner.pronouns[0]})` }}
                            </span>
                        </h5>
                        <div class="d-flex align-items-center gap-3 Tabs-feilds" v-for="(role, index) in feed?.roles"
                            :key="index">
                            <span>{{ role }}</span>
                        </div>
                    </div>
                </div>
                <div class="tabs-desc">
                    <p>
                        {{ feed?.description }}
                    </p>
                </div>
                <div class="img-div">
                    <img :src="feed?.image_type_value" alt="" class="feed_img" />
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
    </div>
</template>
<script setup>
import ShareTabImage from "~/assets/images/share-tabs.png";
import Messagetabs from "~/assets/images/message-tabs.png";
import UserSlider from "~/assets/images/user-slider.png"
import TagSlider from "~/assets/images/Tag-slider.png"
import bookmarket from "~/assets/images/bookmark-tabs.png";
import MenuTab from "~/assets/images/Menu_tabs.png";
import ImageIconSlider from "~/assets/images/Image-icon-slider.png"
import BlackImgIcon from "~/assets/images/BlackImgIcon.png"
import { useStore } from "../store";
import { storeToRefs } from "pinia";
const { feedData } = storeToRefs(useStore());
</script>
<style>
.profile-img {
    width: 60px;
    border-radius: 50%;
}

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
  