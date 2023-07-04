<template>
  <div class="bizly-card d-flex flex-column justify-content-end m-0 mr-2">
    <div class="d-flex align-items-start gap-2 inner-bizly-card m-0 p-0 flex-column justify-center-center">
      <div class="d-flex align-items-center gap-3 card-data">
        <img :src="VideoIcon" alt="Self " />
        <p>Video</p>
        <p>3 Mins</p>
        <p>5 days ago</p>
      </div>
      <div class="bizly-card-desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>
<script setup>
import VideoIcon from "~/src/assets/images/video-icon.png";
</script>
<style scoped lang="scss">
.bizly-card {
  background-image: url('~/src/assets/images/second-card-bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  padding: 16px;
  height: 200px;
  cursor: pointer;
  margin-right: 16px !important;
  position: relative;


  .inner-bizly-card {

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #bfbfbf;
      margin-bottom: 0;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 3px;
        top: 8px;
        right: -9px;
        border-radius: 50%;
        background-color: #bfbfbf;
      }

      &:last-child {
        &::after {
          display: none;
        }
      }
    }

    .bizly-card-desc {
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: #ffffff;
        margin-bottom: 0;
        z-index: 1;
      }
    }

    .card-data {
      z-index: 1;
    }

    .overlay {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 14, 47, 0.695);
    }
  }

  &:hover {
    .overlay {
      display: block;
    }
  }

}
</style>