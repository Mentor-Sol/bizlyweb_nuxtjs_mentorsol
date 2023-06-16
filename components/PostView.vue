<template>
    <div v-for="(feed, index) in feedData" :key="index">
        <template v-if="feed?.content_type == 'image' && feed.is_gallery == false">
            <ImagePost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'text' && feed.is_gallery == false">
            <TextPost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'link' && feed.is_gallery == false">
            <LinkPost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'image_gallery'">
            <ImageGalleryPost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'link_gallery'">
            <LinkGalleryPost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'video'">
            <VideoPost :data="feed" class="mb-3" />
        </template>
    </div>
</template>
<script setup>
import { useStore } from "../store";
import { storeToRefs } from "pinia";
import ImagePost from "./Posts/ImagePost.vue";
import TextPost from "./Posts/TextPost.vue";
import LinkPost from "./Posts/LinkPost.vue";
import ImageGalleryPost from "./Posts/ImageGalleryPost.vue";
import VideoPost from "./Posts/VideoPost.vue";
import LinkGalleryPost from '~/assets/images/LinkGalleryPost.svg';
const { feedData } = storeToRefs(useStore());
</script>
<style lang="scss">
.profile-img {
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    overflow: hidden;

    img {
        height: 50px;
        width: 50px;
    }
}
</style>
  