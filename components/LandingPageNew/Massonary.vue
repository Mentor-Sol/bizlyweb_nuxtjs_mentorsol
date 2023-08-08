<template>
  <div class="main">
    <div class="main-massonary">
      <div class="row-1">
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-1.webp" alt="pic1" />
        </div>
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-2.webp" alt="pic2" />
        </div>
      </div>
      <div class="row-2">
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-3.webp" alt="pic3" />
        </div>
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-4.webp" alt="pic4" />
        </div>
      </div>
      <div class="row-3">
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-5.webp" alt="pic5" />
        </div>
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-6.webp" alt="pic6" />
        </div>
      </div>
      <div class="row-4">
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-7.webp" alt="pic7" />
        </div>
        <div class="" data-aos="fade-up" data-aos-duration="3000">
          <img src="../../src/assets/images/pic-8.webp" alt="pic8" />
        </div>
      </div>
    </div>
    <div class="landingPortfolio">
      <LandingPageNewBizlyPortfolio />
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
</script>

<style lang="scss" scoped>
.main {
  .main-massonary {
    margin-top: 6rem;
    height: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 950px) {
      display: none;
    }
    img {
      border-radius: 16px;
      box-shadow: 9.9px 9.9px 42px 19px rgba(0, 0, 0, 0.46);
      width: 225px;
    }

    .row-1 {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 10rem;
    }
    .row-2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10rem;
    }
    .row-3 {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;

      gap: 10rem;
    }

    .row-4 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 10rem;
    }
  }
  .landingPortfolio {
    padding-top: 100px;
  }
}
</style>
