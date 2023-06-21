<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
        role="tab" aria-controls="contact" aria-selected="true">
        <img :src="Contact" alt=" Contact" />
        <p>Contact</p>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="content-tab" data-bs-toggle="tab" data-bs-target="#content" type="button" role="tab"
        aria-controls="content" aria-selected="false">
        <img :src="Content" alt="Content" />
        <p>Content</p>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="services-tab" data-bs-toggle="tab" data-bs-target="#services" type="button" role="tab"
        aria-controls="services" aria-selected="false">
        <img :src="Services" alt="Services" />
        <p>Services</p>
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <ContactTab :data="data" />
    <ContentTab :data="data" />
    <ServicesTab :data="data" />
  </div>
</template>

<script setup>
import Contact from "~/assets/images/contact.svg";
import Content from "~/assets/images/content.svg";
import Services from "~/assets/images/services.svg";
import { useStore } from "@/store/";
import { storeToRefs } from "pinia";
import ContactTab from "./Tabs/ContactTab.vue"
import ContentTab from "./Tabs/ContentTab.vue"
import ServicesTab from "./Tabs/ServicesTab.vue"
const { data } = storeToRefs(useStore());

</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 300px;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}

.feature_img {
  width: 100%;
}

.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
  position: relative;
}

.swiper-cards {
  width: 240px;
  height: 240px;
}

.count {
  right: 34px;
  position: absolute;
  z-index: 999;
  color: white;
  top: 32px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
