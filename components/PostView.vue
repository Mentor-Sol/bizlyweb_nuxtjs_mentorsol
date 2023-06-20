<template>
    <div v-for="(feed, index) in feedData" :key="index">
        <template v-if="feed?.content_type == 'image'">
            <ImagePost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'text'">
            <TextPost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'link'">
            <LinkPost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'image_gallery'">
            <ImageGalleryPost :data="feed" class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'link_gallery'">
            <LinkGalleryPost class="mb-3" />
        </template>
        <template v-if="feed?.content_type == 'video'">
            <VideoPost :data="feed" class="mb-3" />
        </template>
    </div>
</template>
<script setup>
import { useStore } from "../store";
import { storeToRefs } from "pinia";
const { feedData } = storeToRefs(useStore());
import ImagePost from "./Posts/ImagePost.vue";
import TextPost from "./Posts/TextPost.vue";
import LinkPost from "./Posts/LinkPost.vue";
import ImageGalleryPost from "./Posts/ImageGalleryPost.vue";
import VideoPost from "./Posts/VideoPost.vue";
import LinkGalleryPost from './Posts/LinkGalleryPost.vue';
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
  