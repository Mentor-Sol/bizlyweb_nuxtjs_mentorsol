<template>
  <div class="Home-banner">
    <div class="container inner-container">
      <div class="inner-banner">
        <img :src="ShareIcon" alt="Share" />
        <div class="banner-desc">
          <p>Risk is the price you pay for opportunity.</p>
        </div>
      </div>
      <div class="row m-0 p-0">
        <div class="col-lg-12 m-0 p-0">
          <div class="d-flex justify-content-between inspired-section align-items-center my-2">
            <p style="font-family: Roboto;
font-size: 18px;
font-weight: 300;
line-height: 28px;
letter-spacing: 0px;
text-align: left;
">Get Inspired</p>
            <a href="#">Explore More</a>
          </div>
        </div>
      </div>
      <div class="row inner-cards m-0 p-0">
        <InsipiredCard />
      </div>
      <div class="row p-0 m-0">
        <div class="col-lg-12 p-0 m-0">
          <div class="d-flex justify-content-between inspired-section bizlyupdate align-items-baseline  my-2">
            <p style="
                font-family: Ubuntu;
                font-size: 1.125rem;
                font-style: italic;
                font-weight: 500;
                line-height: 28px;
                letter-spacing: 0px;
                text-align: left;
              ">
              bizUpdates
            </p>
            <a href="#">See All</a>
          </div>
        </div>
      </div>
      <div class="row m-0 p-0 updates-section">
        <div class="col-lg-6 m-0 p-0 update-card">
          <BizlyupdateCard />
        </div>
        <div class="col-lg-6 m-0 p-0 update-card">
          <BizlyupdateCard />
        </div>
        <div class="col-lg-6 m-0 p-0 update-card">
          <BizlyupdateCard />
        </div>
        <div class="col-lg-6 m-0 p-0 update-card">
          <BizlyupdateCard />
        </div>
      </div>
      <div class="row m-0 p-0">
        <div class="col-lg-12 m-0 p-0">
          <div class="inspired-section">
            <p style="
                font-family: Roboto;
                font-size: 18px;
                font-weight: 300;
                line-height: 28px;
                letter-spacing: 0px;
                text-align: left;
              ">
              Get in touch
            </p>
          </div>
          <div>
            <GetinTouch />
          </div>
        </div>
      </div>
      <div class="row m-0 p-0">
        <HomeTabs />
      </div>
    </div>
  </div>
  <div class="tabs-main">
    <div class="container p-3 p-md-0 ">
      <div class="tab-content" id="myTabContentHome">
        <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div className="TabsWrapper">
            <PostView />
          </div>
        </div>
        <!-- <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
          <h2>hi</h2>
        </div>
        <div class="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
          <h1>heloooo</h1>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import BizlyupdateCard from "../components/Home/BizlyupdateCard.vue";
import GetinTouch from "../components/Home/GetinTouch.vue";
import HomeTabs from "../components/Home/HomeTabs.vue";
import InsipiredCard from "../components/Home/InsipiredCard.vue";
import ShareIcon from "~/src/assets/images/share2.svg";
// import TabSevnthSection from "../components/TabSevnthSection.vue";
// import TabsEightSection from "../components/TabsEightSection.vue";
// import TabsNightSection from "../components/TabsNightSection.vue";
// import TabsSixthSection from "../components/TabsSixthSection.vue";
// import TabstenthSection from "../components/TabstenthSection.vue";
// import TabsFirstSection from "../components/tabsFirstSection.vue";
// import TabsSecondSection from "../components/tabsSecondSection.vue";
// import TabsVideoSection from "../components/tabsVideoSection.vue";
// import TabsfifthSection from "../components/tabsfifthSection.vue";
import PostView from "../components/PostView.vue";
</script>
<style scoped lang="scss">
.inspired-section {
  padding: 15px 0px 10px;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #fafafa;
    margin-bottom: 0;
  }

  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #2998ff;
    text-decoration: none;
  }
}

.updates-section {
  justify-content: space-between;
  overflow-x: auto;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
