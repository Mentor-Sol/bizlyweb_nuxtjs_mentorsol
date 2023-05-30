<template>
  <div className="feature">
    <Swiper
      :height="700"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in dataBizCard?.owner?.background_images"
        :key="idx"
      >
        <img :src="slide" className="feature_img" />
        <div className="count ">
          <p>FEATURED</p>
          <div className="inner d-flex ">
            <img :src="MultipleImg" alt=" MultipleImg" />
            <span
              >{{ idx + 1 }}/{{
                dataBizCard?.owner?.background_images?.length
              }}</span
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperControls />
    </Swiper>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../store";
import MultipleImg from "~/assets/images/multipleImg.svg";

const { dataBizCard } = storeToRefs(useStore());
</script>
<style>
.feature .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  height: 550px;
}

.feature .feature_img {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
  position: relative;
}

.count {
  right: 10px;
  position: absolute;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  top: 7px;
  font-size: large;
}

.count p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background: rgba(53, 120, 248, 0.9);
  backdrop-filter: blur(2.5px);
  border-radius: 20px;
  padding: 6px 12px;
  margin: 0;
  margin-right: 10px;
}

.inner {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  padding: 6px 12px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
