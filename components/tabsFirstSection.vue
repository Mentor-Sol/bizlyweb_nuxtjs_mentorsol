

<template>
    <div class="inner-tabs-wrapper">
        <div class="inner-header-tabs d-flex justify-content-between">
            <div class="header-tabs-name d-flex align-items-center gap-1">
                <div>
                    <img :src="ImageAlbum" alt="">

                </div>
                <div class="d-flex align-items-center gap-3">
                    <p>10</p>
                    <p>Image Gallery Name</p>
                    <span>5d</span>
                </div>
            </div>
            <div class="header-tabs-icons d-flex gap-4 align-items-center">
                <img :src="bookmarket" alt="">
                <img :src="MenuTab" alt="">
            </div>
        </div>
        <div class="Tabs-title  d-flex align-items-center gap-3">
            <div>
                <img :src="TitleImage" alt="">
            </div>
            <div class="Tabs-title-name">
                <h5>Meghan Smith <span>(She/Her)</span></h5>
                <div class="d-flex align-items-center gap-3 Tabs-feilds">
                    <span>Producer</span>
                    <span>Writer</span>
                    <span>Director</span>
                </div>
                <p>Camera Operator <span>at</span> Paramount Pictures</p>
            </div>

        </div>
        <div class="tabs-desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter... <a
                    href="#">see more</a></p>
        </div>
        <div class="main-thums-Slider">
            <Thumbsgallery />
        </div>
        <div class="inner-footer-tabs d-flex justify-content-around">
            <div class="footer-messages d-flex align-items-center gap-2">
                <img :src="Messagetabs" alt="">
                <p>bizMessage</p>
            </div>
            <div class="footer-share d-flex align-items-center gap-2">
                <img :src="ShareTabImage" alt="">
                <p>Share</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import Thumbsgallery from './Thumbsgallery.vue';

import ShareTabImage from "../assets/images/share-tabs.png"
import Messagetabs from "../assets/images/message-tabs.png"
import TitleImage from "../assets/images/title-img.png"
import ImageAlbum from "../assets/images/image album.png"
import bookmarket from "../assets/images/bookmark-tabs.png"
import MenuTab from "../assets/images/Menu_tabs.png"
</script>