<template>
  <div class="inner-tabs-wrapper">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-3">
        <div class="header-tabs-name-dot">
          <img :src="BlackImgVideo" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>Link Title</p>
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
        <img :src="TitleImage" alt="" />
      </div>
      <div class="Tabs-title-name">
        <h5>Meghan Smith <span>(She/Her)</span></h5>
        <div class="d-flex align-items-center gap-3 Tabs-feilds">
          <span>Producer</span>
          <span>Writer</span>
          <span>Director</span>
        </div>
        <p>CEO <span>at</span> Biz Technologies</p>
      </div>
    </div>
    <div class="tabs-desc">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit inter... <a href="#">see more</a>
      </p>
    </div>
    <div class="main-thums-Slider main-thums-Slider-second">
      <div>
        <img :src="SecondSectionImg" alt="" />
        <div class="inner-description-wrapper">
          <span>WEBSITE.COM</span>
          <p>Link Title</p>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie ipsum dolor conse...</span
          >
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
import TitleImage from "~/assets/images/title-img.png";
</script>
