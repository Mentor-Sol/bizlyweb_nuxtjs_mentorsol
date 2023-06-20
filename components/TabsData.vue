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
    <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <div className="TabsWrapper">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <p className="tabsHead" role="button" @click="scheduleMeeting">
                Schedule a Meeting
              </p>
            </div>
            <div className="col-lg-6">
              <p className="tabsHead" role="button">Check Availability</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 tabsInner">
              <div className="socialIcon">
                <p>Socials</p>
                <span className="text-light" v-if="!data?.social_networks?.length">No Social networks added yet</span>
                <div className="d-flex Icons" v-if="data?.social_networks?.length">
                  <div v-for="(item, index) in data?.social_networks" :key="index">
                    <a v-if="item.enabled" :href="item.url" target="_blank">
                      <img v-if="item.enabled" :src="socialNetworks[item.network]" :alt="item.network" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="userInfo">
                <p>Meghan Magin</p>
                <div v-for="(item, index) in data?.contact_information" :key="index">
                  <div v-if="item.enabled" className="d-flex align-items-center info">
                    <div className="infoIcon">
                      <img :src="ContactIcons[item?.contact_type]" :alt="item?.contact_type" />
                    </div>

                    <p>{{ item?.information }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 tabsInner">
              <div className="userInfo">
                <div className="d-flex align-items-center info infoLocation">
                  <div className="infoIcon">
                    <img :src="locationIcon" alt="location" />
                  </div>
                  <div>
                    <p>Meghan Magin</p>
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
                <div className="tabMap">
                  <GoogleMaps />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
      <div className="contentWrapper bg-black">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="contentButton">
                <CustomButton text="Custom Button 1" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="contentButton">
                <CustomButton text="Custom Button 2" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="contentButton">
                <CustomButton text="Custom Button 3" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div>
                <CustomSlider />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="galleryOne">
                <div className="imgNumber d-flex">
                  <img :src="Gallery" alt=" gallery" />
                </div>

                <p className="subContentDesc">
                  Title Goes here until it runs out of space.
                </p>
              </div>
              <div className="galleryTwo">
                <SwiperComponent :images="images" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-lg-0">
              <div className="galleryFive">
                <SwiperComponent :images="images" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="galleryFour">
                <div className="subContent">
                  <div className="imgNumber d-flex">
                    <img :src="layoutFluid" alt=" MultipleImg" />
                  </div>
                </div>

                <p className="subContentDesc">
                  Title Goes here until it runs out of space.
                </p>
              </div>
              <div className="galleryFive">
                <SwiperComponent :images="images" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-lg-0">
              <div className="gallerySix">
                <div className="subContent">
                  <div className="imgNumber d-flex">
                    <img :src="LinkGallery" alt=" MultipleImg" />
                  </div>
                </div>

                <p className="subContentDesc">
                  Title Goes here until it runs out of space.
                </p>
              </div>
              <div className="gallerySeven">
                <SwiperComponent :images="images" />
              </div>
              <div className="galleryEight">
                <div className="subContent">
                  <div className="imgNumber d-flex">
                    <img :src="LinkGallery" alt=" MultipleImg" />
                  </div>
                </div>

                <p className="subContentDesc">
                  Title Goes here until it runs out of space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
      <div className="ServicesWrapper bg-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="innerServices">
                <div className="serviceHeading d-flex justify-content-between">
                  <p>Availability</p>
                  <p>
                    {{
                      data?.available_to_work ? "Available" : "Not Available"
                    }}
                  </p>
                </div>
                <div className="d-flex">
                  <div className="w-50">
                    <div v-if="data?.available_to_work" className="d-flex align-items-center info">
                      <div className="infoIcon">
                        <img :src="Clock" alt="Clock " />
                      </div>

                      <p>{{ data?.availability_overview }}</p>
                    </div>
                    <div className="d-flex align-items-center info">
                      <div className="infoIcon">
                        <img :src="Travel" alt="Phone" />
                      </div>

                      <p>Will travel anywhere</p>
                    </div>
                  </div>
                  <div className="w-50">
                    <div className="d-flex align-items-center info">
                      <div className="infoIcon">
                        <img :src="Timezone" alt="Phone" />
                      </div>

                      <p>Any timezone</p>
                    </div>
                    <div className="d-flex align-items-center info">
                      <div className="infoIcon">
                        <img :src="Passport" alt="Phone" />
                      </div>

                      <p>Passport available</p>
                    </div>
                  </div>
                </div>
                <div className="locationWrapper mb-3">
                  <span>Locations</span>
                  <div className="location">
                    <p v-for="(item, index) in data?.services_locations" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
                <div className="locationWrapper  mb-3">
                  <span>Opportunity Interests</span>
                  <div className="location">
                    <p v-for="(item, index) in data?.opportunity_settings" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
                <div className="locationWrapper">
                  <span>Workplace</span>
                  <div className="location">
                    <p v-for="(item, index) in data?.workplace_settings" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
              <div className="innerServices">
                <div className="serviceHeading ">
                  <p>Availability</p>
                </div>
                <div className="info">
                  <p className="mb-3">{{ data?.availability_overview }}</p>
                </div>
              </div>
              <div className="innerServices">
                <div class="serviceHeading">
                  <p>Professional Skills</p>
                </div>
                <div className="locationWrapper">
                  <div className="location">
                    <p v-for="(item, index) in data?.professional_skills" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <TypeofServices title="Services Section 1 Title" id="sect1" />
              <TypeofServices title="Services Section 2 Title" id="sect2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Twitter from "~/assets/images/Twitter.svg";
import Instagram from "~/assets/images/instagram.svg";
import Google from "~/assets/images/Google.svg";
import LinkedIn from "~/assets/images/Twitter.svg";
import Facebook from "~/assets/images/facebook.svg";
import Phone from "~/assets/images/phone.svg";
import Email from "~/assets/images/email.svg";
import MultipleImg from "~/assets/images/multipleImg.svg";

import LinkIcon from "~/assets/images/Link.svg";
import locationIcon from "~/assets/images/location1.svg";
import Contact from "~/assets/images/contact.svg";
import Content from "~/assets/images/content.svg";
import Services from "~/assets/images/services.svg";
import layoutFluid from "~/assets/images/layout-fluid.svg";
import LinkGallery from "~/assets/images/Linkgallery.svg";
import Gallery from "~/assets/images/gallery.svg";
import Clock from "~/assets/images/clock.png";
import Timezone from "~/assets/images/timezone.svg";
import Travel from "~/assets/images/travel.png";
import Passport from "~/assets/images/passport.svg";
import { useStore } from "@/store/";
import { storeToRefs } from "pinia";
import CustomButton from "./CustomButton.vue";

const { data } = storeToRefs(useStore());
let imageGallery = ref([]);

const images = [
  "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
  "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
  "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE",
  "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
];

watchEffect(() => {
  const imgGallery = data.value?.content?.filter(
    (el) => el.content_type === "image_gallery"
  );
  imageGallery.value = imgGallery?.flatMap((el) => el.image_kit_ids);
});

const biz_button_options = data?.biz_button_options;

const scheduleMeeting = () => {
  window.open(biz_button_options?.meeting_url);
};

const ContactIcons = {
  phone: Phone,
  email: Email,
  link: LinkIcon,
};

const socialNetworks = {
  facebook: Facebook,
  twitter: Twitter,
  google: Google,
  instagram: Instagram,
  linkedin: LinkedIn,
};
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
