<template>
  <div class="inner-tabs-wrapper">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-3">
        <div class="header-tabs-name-dot">
          <img :src="BlackImageAlbum" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>Image Name</p>
          <span>5d</span>
        </div>
      </div>
      <div class="header-tabs-icons d-flex gap-4 align-items-center">
        <img :src="bookmarket" alt="" />
        <img :src="MenuTab" alt="" />
      </div>
    </div>
    <div class="Tabs-title d-flex align-items-center gap-3">
      <div>
        <img :src="ManTitleImage" alt="" />
      </div>
      <div class="Tabs-title-name">
        <h5>Nathan Pencil<span>(He/Him)</span></h5>
        <div class="d-flex align-items-center gap-3 Tabs-feilds">
          <span>Producer</span>
          <span>Writer</span>
          <span>Director</span>
        </div>
        <p>Camera Operator <span>at</span> Paramount Pictures</p>
      </div>
    </div>
    <div class="tabs-desc">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit inter... <a href="#">see more</a>
      </p>
    </div>
    <div class="main-thums-Slider main-thums-Slider-second">
      <img :src="SecondSectionImg" alt="" />
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
          <div class="img-box">
            <img :src="ImageIconSlider" alt="" />
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
</template>
<script setup>
import SecondSectionImg from "~/src/assets/images/secondsectionimg.png";
import ShareTabImage from "~/src/assets/images/share-tabs.png";
import Messagetabs from "~/src/assets/images/message-tabs.png";
import ManTitleImage from "~/src/assets/images/manImage.png";
import BlackImageAlbum from "~/src/assets/images/BlackImgIcon.png";
import bookmarket from "~/src/assets/images/bookmark-tabs.png";
import MenuTab from "~/src/assets/images/Menu_tabs.png";
import UserSlider from "~/src/assets/images/user-slider.png";
import TagSlider from "~/src/assets/images/Tag-slider.png";
import ImageIconSlider from "~/src/assets/images/Image-icon-slider.png";
</script>
