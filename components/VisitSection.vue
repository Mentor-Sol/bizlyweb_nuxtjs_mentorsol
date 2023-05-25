<template>
  <div class="main-insight pt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner-insight">
            <div class="inner-insight-data">
              <div
                class="inner-inight-heading mb-3 d-flex justify-content-between align-items-cente"
              >
                <div>
                  <h1>Card Visits</h1>
                  <p>
                    Lorem ipsum dolor sit amet, eu sit timeam legendos volutpat,
                    eu facete constituto.
                  </p>
                </div>
              </div>

              <div class="card-visit-values d-flex gap-2 align-items-center">
                <div
                  class="card-visit-icon d-flex align-items-center justify-content-center"
                >
                  <img :src="StatisticsIcon" alt="Ambassador" />
                </div>
                <div>
                  <p>You get 686,845 visits per month on average</p>
                </div>
              </div>
              <div
                class="card-visit-values border-none d-flex gap-2 mb-4 align-items-center"
              >
                <div
                  class="card-visit-icon d-flex align-items-center justify-content-center"
                >
                  <img :src="BlueClockIcon" alt="Ambassador" />
                </div>
                <div>
                  <p>Average time spent on card is 944 seconds</p>
                </div>
              </div>
              <div>
                <LandingPageTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import StatisticsIcon from "~/assets/images/statistics.png";
import BlueClockIcon from "~/assets/images/blue-clock.png";
import LandingPageTabs from "./LandingPageTabs.vue";
</script>
<style lang="scss" scoped>
$color_1: #141414;
$color_2: #ffffff;
$color_3: #39537d;
$color_4: #595959;
$color_5: #141414;

$font-family_1: "Roboto";

.main-insight {
  background: #f5f5f5;

  .container {
    max-width: 664px !important;
    margin: auto;
  }
}

.inner-inight-heading {
  h1 {
    font-family: $font-family_1;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: $color_1;
    margin-bottom: 0;
  }

  p {
    font-family: $font-family_1;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #595959;
    margin-bottom: 0;
  }

  a {
    font-family: $font-family_1;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $color_5;
    text-decoration: none;
  }
}

.inner-insight-data {
  h1 {
    font-family: $font-family_1;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: $color_1;
    margin-bottom: 0;
  }

  background: #ffffff;
  padding: 24px 16px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  .border-none {
    border: none !important;
    padding-bottom: 0 !important;
  }
  .card-visit-values {
    border-bottom: 0.5px solid #d9d9d9;
    padding: 10px 0;
    .card-visit-icon {
      width: 40px;
      height: 40px;
      background: #eff1f5;
      border-radius: 50%;
    }
    p {
      font-family: $font-family_1;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $color_5;
      margin-bottom: 0;
    }
  }
}
</style>
