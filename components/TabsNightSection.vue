<template>
  <div class="inner-tabs-wrapper">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-3">
        <div class="header-tabs-name-dot">
          <img :src="BlackImgVideo" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>Collection</p>
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
        <h5>Meghan Smith <span>(He/Him)</span></h5>
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
    <div class="main-thums-Slider main-thums-Slider-second collection-thums-slider">
      <div>
        <img :src="SecondSectionImg" alt="" class="inner-img-collection" />
        <div class="inner-Collection-wrapper">
          <h5>Collection Title</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit inter... <a href="#">see more</a>
          </p>
          <div class="d-flex gap-2 collection-images">
            <div>
              <img :src="CollectionThree" alt="" />
            </div>
            <div>
              <img :src="CollectionTwo" alt="" />
            </div>
            <div>
              <img :src="CollectionOne" alt="" />
            </div>
          </div>
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
          <div class="img-box d-flex align-items-center gap-2">
            <img :src="VideoAlbum" alt="" />
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
import SecondSectionImg from "~/public/assets/images/nigthbgimg.png";
import ShareTabImage from "~/public/assets/images/share-tabs.png";
import Messagetabs from "~/public/assets/images/message-tabs.png";
import ManTitleImage from "~/public/assets/images/manImage.png";
import BlackImgVideo from "~/public/assets/images/Showcase.png";
import bookmarket from "~/public/assets/images/bookmark-tabs.png";
import MenuTab from "~/public/assets/images/Menu_tabs.png";
import UserSlider from "~/public/assets/images/user-slider.png";
import TagSlider from "~/public/assets/images/Tag-slider.png";
import VideoAlbum from "~/public/assets/images/Showcasewhite.png";
import CollectionOne from "~/public/assets/images/collectionone.png";
import CollectionTwo from "~/public/assets/images/Collectiontwo.png";
import CollectionThree from "~/public/assets/images/CollectionThree.png";
</script>
