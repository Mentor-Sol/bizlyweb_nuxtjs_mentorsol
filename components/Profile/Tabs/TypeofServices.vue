<template>
  <h1 className="ServiceSectionHeading">{{ title }}</h1>
  <div class="accordion" :id="id">
    <div class="accordion-item" v-for="(item, index) in data?.services" :key="index">
      <h2 class="accordion-header" :id="`Heading${item.id}`">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          :data-bs-target="`#Service${item.id}`" aria-expanded="false" :aria-controls="`Service${item.id}`">
          {{ item.title }}
        </button>
      </h2>
      <div :id="`Service${item.id}`" class="accordion-collapse collapse" :aria-labelledby="`Heading${item.id}`"
        :data-bs-parent="`#${id}`">
        <div class="accordion-body innerServices">
          <div className="info">
            <p>
              {{ item.description }}
            </p>
          </div>
          <div className="d-flex">
            <div className="info w-50">
              <span>{{ GetRate(item) }}</span>
              <p>Pay</p>
            </div>
            <div className="info  w-50">
              <span>{{ item.expertise || 'No information yet' }}</span>

              <p>Level of Expertise</p>
            </div>
          </div>
          <div className="ServiceMessage">
            <button className="w-100 d-flex align-items-center justify-content-center">
              <img :src="ServiceMessage" alt="location" />
              Message
            </button>
          </div>
          <div className="info mt-3">
            <p>Supporting Content</p>
            <div className="d-flex gap-2 mt-3">
              <img :src="SupportingOne" alt="Contact" />
              <img :src="SupportingTwo" alt="Contact" />
              <img :src="SupportingThree" alt="SupportingOne " />
              <img :src="SupportingFour" alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>
<script setup>
import ServiceMessage from "~/assets/images/servicemessage.svg";
import SupportingOne from "~/assets/images/supportigone.svg";
import SupportingTwo from "~/assets/images/supportingtwo.svg";
import SupportingFour from "~/assets/images/supportingfour.svg";
import SupportingThree from "~/assets/images/supportingthree.svg";
import { GetRate } from "../../../composables/getRate"
import { FullBizCard } from "../../../models/ProfileData/FullBizCard";

defineProps({
  data: FullBizCard,
  title: String,
  id: String
});
</script>
<style lang="scss"></style>