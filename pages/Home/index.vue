<template>
  <div class="Home-banner">
    <div class="container inner-container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner-banner">
            <img src="../../assets/images/next-icon.png" alt="" />
            <div class="banner-desc">
              <p>Risk is the price you pay for opportunity.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div
            class="d-flex justify-content-between inspired-section align-items-baseline"
          >
            <p>Get Inspired</p>
            <a href="#">Explore More</a>
          </div>
        </div>
      </div>
      <div class="row inner-cards">
        <InsipiredCard />
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div
            class="d-flex justify-content-between inspired-section bizlyupdate align-items-baseline"
          >
            <p>bizUpdates</p>
            <a href="#">See All</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <BizlyupdateCard />
        </div>
        <div class="col-lg-6">
          <BizlyupdateCard />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="inspired-section">
            <p>Get in touch</p>
          </div>
          <div>
            <GetinTouch />
          </div>
        </div>
      </div>
      <div class="row">
        <HomeTabs />
      </div>
    </div>
  </div>
  <div class="tabs-main mt-3">
    <div class="container p-0">
      <div class="tab-content" id="myTabContentHome">
        <div
          class="tab-pane fade show active"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="TabsWrapper">
            <PostView />
          </div>
        </div>
        <!-- <div
          class="tab-pane fade"
          id="content"
          role="tabpanel"
          aria-labelledby="content-tab"
        >
          <h2>hi</h2>
        </div>
        <div
          class="tab-pane fade"
          id="services"
          role="tabpanel"
          aria-labelledby="services-tab"
        >
          <h1>heloooo</h1>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import BizlyupdateCard from "../../components/BizlyupdateCard.vue";
import GetinTouch from "../../components/GetinTouch.vue";
import HomeTabs from "../../components/HomeTabs.vue";
import PostView from "../../components/PostView.vue";
</script>
