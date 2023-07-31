<template>
  <div class="landing-main">
    <LandingMain />
    <AboutBizlyInfoCard />
    <BizlyNetworkSection />
    <BizlyRoloDex />
    <BizlyOpportunities />
    <Massonary />
    <BizlyPortfolio />
    <BizlyPillsSection />
    <WhyBizly />
    <CommunitySection />
  </div>
</template>
<script setup>
import AboutBizlyInfoCard from "./AboutBizlyInfoCard.vue";
import BizlyNetworkSection from "./BizlyNetworkSection.vue";
import BizlyOpportunities from "./BizlyOpportunities.vue";
import BizlyRoloDex from "./BizlyRoloDex.vue";
import BizlyPortfolio from "./BizlyPortfolio.vue";
import BizlyPillsSection from "./BizlyPillsSection.vue";
import WhyBizly from "./WhyBizly.vue";
import CommunitySection from "./CommunitySection.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Massonary from "./Massonary.vue";

AOS.init();
</script>
<style lang="scss" scoped>
.landing-main {
  background: radial-gradient(
      circle at 75% 100%,
      #141414 0%,
      17.5%,
      rgba(20, 20, 20, 0) 35%
    ),
    radial-gradient(
      circle at 21.25% 97.5%,
      #141414 0%,
      17.5%,
      rgba(20, 20, 20, 0) 35%
    ),
    radial-gradient(
      circle at 51.66666666666667% 100%,
      #141414 0%,
      32.4%,
      rgba(20, 20, 20, 0) 90%
    ),
    radial-gradient(
      circle at 48.75% 82.5%,
      rgba(41, 152, 255, 0.6) 0%,
      23.43%,
      rgba(41, 152, 255, 0) 71%
    ),
    radial-gradient(
      circle at 23.333333333333332% 39.166666666666664%,
      #141414 0%,
      27.3%,
      rgba(20, 20, 20, 0) 91%
    ),
    radial-gradient(
      circle at 47.5% 17.5%,
      rgba(41, 152, 255, 0.65) 0%,
      4.8%,
      rgba(41, 152, 255, 0) 16%
    ),
    radial-gradient(
      circle at 35.41666666666667% 53.333333333333336%,
      rgba(41, 152, 255, 0.4) 0%,
      6%,
      rgba(41, 152, 255, 0) 20%
    ),
    radial-gradient(
      circle at 0% 54.166666666666664%,
      #141414 0%,
      30.82%,
      rgba(20, 20, 20, 0) 46%
    ),
    radial-gradient(
      circle at 94.16666666666667% 6.666666666666667%,
      #000000 0%,
      17.5%,
      rgba(0, 0, 0, 0) 35%
    ),
    radial-gradient(circle at 0% 100%, #000000 0%, 17.5%, rgba(0, 0, 0, 0) 35%),
    radial-gradient(
      circle at 100% 100%,
      #000510 0%,
      17.5%,
      rgba(0, 5, 16, 0) 35%
    ),
    radial-gradient(
      circle at 100% 55.00000000000001%,
      #000000 0%,
      21.5%,
      rgba(0, 0, 0, 0) 43%
    ),
    radial-gradient(circle at 0% 100%, #000000 0%, 32.5%, rgba(0, 0, 0, 0) 65%),
    radial-gradient(
      circle at 100% 100%,
      #000000 0%,
      32.5%,
      rgba(0, 0, 0, 0) 65%
    ),
    radial-gradient(
      circle at 47.5% 0%,
      #141414 0%,
      23.099999999999998%,
      rgba(20, 20, 20, 0) 77%
    ),
    radial-gradient(
      circle at 7.083333333333333% 2.5%,
      rgba(0, 0, 0, 0.99) 0%,
      50%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(
      circle at 30.833333333333336% 73.33333333333333%,
      #2998ff 0%,
      30%,
      rgba(41, 152, 255, 0) 100%
    ),
    radial-gradient(
      circle at 51.24999999999999% 63.33333333333333%,
      #2998ff 0%,
      30%,
      rgba(41, 152, 255, 0) 100%
    ),
    radial-gradient(
      circle at 48.9013671875% 49.521484375%,
      #ffffff 0%,
      100%,
      rgba(255, 255, 255, 0) 100%
    );
  overflow-x: hidden;
}
</style>
