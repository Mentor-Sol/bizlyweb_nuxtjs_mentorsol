<template>
  <div>
    <div class="heading-section" data-aos="fade-up" data-aos-duration="3000">
      <div class="heading">Your <span class="heading-bold">network.</span></div>
      <div class="heading">Your <span class="heading-bold">work.</span></div>
      <div class="heading"><span class="heading-bold">One place.</span></div>
    </div>
    <div class="para-section" data-aos="fade-up" data-aos-duration="3000">
      Elevate your career with <span>bizly</span> - the ultimate platform for
      creatives, talent, and professionals, to showcase their work, build their
      network, and discover infinite opportunities.
    </div>
    <div class="btn-section" data-aos="fade-up" data-aos-duration="3000">
      <div class="button">join the waitlist</div>
    </div>
    <div class="img-section" data-aos="fade-up" data-aos-duration="3000">
      <img :src="Mobile" alt="mobile" width="850" height="944" />
    </div>
  </div>
</template>

<script setup>
import Mobile from "~/src/assets/images/mobile.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>

<style lang="scss" scoped>
.heading-section {
  @media screen and (max-width: 768px) {
    padding-top: 5rem;
  }
  .heading {
    color: #ffffff;
    font-size: 80px;
    text-align: center;
    font-weight: 300;
    line-height: 90px;
    @media screen and (max-width: 768px) {
      font-size: 45px;
      line-height: 50px;
    }
    .heading-bold {
      font-weight: 500;
    }
  }
}
.para-section {
  color: #cdd5e1;
  font-size: 21px;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  line-height: 2;
  width: 60%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 18px;
    line-height: 25px;
    padding-top: 1rem;
  }
  span {
    font-weight: 600;
    font-style: italic;
  }
}

.btn-section {
  display: flex;
  justify-content: center;
  align-items: center;
  .button {
    margin: 4rem 0rem 0rem 0rem;
    color: white;
    border-radius: 4px;
    background: repeat padding-box border-box 0% 0% / auto auto scroll
      linear-gradient(
        90deg,
        rgba(41, 152, 255, 0.31) 10%,
        rgba(41, 152, 255, 0.13) 50%,
        rgba(41, 152, 255, 0.27) 84%
      );
    border: 1px solid #2998ff;

    box-shadow: -2.83px 2.83px 46px 3px rgba(0, 0, 0, 0);
    height: 53px;
    min-width: 270px;
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    display: flex;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out 0s, visibility 0s;
    padding: 0px 3rem;

    cursor: pointer;
  }
  .button:hover {
    background: repeat padding-box border-box 0% 0% / auto auto scroll
      linear-gradient(
        134deg,
        rgba(41, 152, 255, 0.51) 0%,
        rgba(41, 152, 255, 0.6) 46%,
        rgba(41, 152, 255, 0.6) 100%
      );
    box-shadow: -2.83px 2.83px 46px 3px rgba(0, 0, 0, 0.65);
  }
}
.img-section {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}
</style>
