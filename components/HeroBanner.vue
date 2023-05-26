<template>
  <div class="main-hero-banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex justify-content-between">
            <div class="inner-banner-title">
              <div class="d-flex gap-3 align-items-center mb-4">
                <div>
                  <img :src="BannerImgIcon" alt="Ambassador" />
                </div>
                <div class="d-flex gap-2 align-items-center inner-title-name">
                  <h1>Alex King</h1>
                  <a href="#"><span>bizPro</span></a>
                </div>
              </div>
              <div class="d-flex gap-5 align-items-center mb-4">
                <div class="inner-banner-values">
                  <img :src="BannerUserImg" alt="Ambassador" />
                  <h5>273</h5>
                  <p>Connections</p>
                </div>
                <div class="inner-banner-values">
                  <img :src="BannerNotificationIcon" alt="Ambassador" />
                  <h5>73</h5>
                  <p>Followers</p>
                </div>
                <div class="inner-banner-values">
                  <img :src="BannerEyeIcon" alt="Ambassador" />
                  <h5>198</h5>
                  <p>Monthly Visits</p>
                </div>
              </div>
              <div class="d-flex gap-2 inner-title-values">
                <a href="#" @click="clicked">Manage Connections</a>
                <a href="#" @click="showModal = true">Edit <span>bizCard</span></a>
              <Modal :showModal="showModal"></Modal>

              </div>

            </div>
            <div class="inner-banner-icons d-flex gap-3 align-items-start">
              <img :src="BannerEyeIcon" alt="Ambassador" />
              <img :src="BannerDownloadIcon" alt="Ambassador" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BannerImgIcon from "~/assets/images/banner-img-icon.png";
import BannerEyeIcon from "~/assets/images/banner-eye-icon.png";
import BannerDownloadIcon from "~/assets/images/banner-download-icon.png";
import BannerUserImg from "~/assets/images/banner-user-img.png";
import BannerNotificationIcon from "~/assets/images/banner-notification-icon.png";

</script>
<script>
import Modal from '~/components/Modal.vue';
export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style lang="scss" scoped>
$color_1: #ffffff;
$font-family_1: "Roboto";
$font-family_2: "Ubuntu";

.main-hero-banner {
  background-image: url(../assets/images/Hero.png);
  background-position: center;
  background-size: cover;
  padding: 80px 100px;
}

.inner-banner-title {
  .inner-title-name {
    h1 {
      font-family: $font-family_1;
      font-style: normal;
      font-weight: 700;
      font-size: 72px;
      line-height: 84px;
      color: $color_1;
    }

    a {
      padding: 6px 24px !important;
    }
  }

  a {
    span {
      font-family: $font-family_2;
      font-style: italic;
    }

    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
    font-family: $font-family_1;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    color: $color_1;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.5px);
    border-radius: 30px;
    padding: 12px 28px;
  }

  .inner-banner-values {
    text-align: center;

    h5 {
      font-family: $font-family_1;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      color: $color_1;
      margin-bottom: 0;
    }

    img {
      margin-bottom: 5px;
    }

    p {
      font-family: $font-family_1;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      color: $color_1;
    }
  }
}
</style>
