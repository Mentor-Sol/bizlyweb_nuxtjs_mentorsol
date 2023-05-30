<template>
  <div
    class="inner-insipired-card"
    v-for="(item, index) in inspirationData"
    :key="index"
    :style="`background-image: url(${item?.image || cardImage})`"
  >
    <div @click="goTo(item?.biz_card_id)">
      <div class="d-flex justify-content-end">
        <img :src="ToggleIconCard" alt="Self " />
      </div>
      <div>
        <h5>{{ item?.first_name + " " + item?.last_name }}</h5>
        <p>Photographer <span>.</span> Colodjuhuo</p>
        <div
          class="d-flex align-items-center gap-1 home-location justify-content-center"
        >
          <img :src="LocationIcon" alt="Self " />

          <p>{{ item?.location || "" }}</p>
        </div>
        <div class="d-flex align-items-center gap-4 justify-content-center">
          <img :src="MessageIcon" alt="Self " v-if="item?.is_following" />
          <img :src="Ambassadorcon" alt="Self " v-if="!item?.is_following" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleIconCard from "~/assets/images/toggle-icon-card.png";
import LocationIcon from "~/assets/images/location.svg";
import MessageIcon from "~/assets/images/message.svg";
import Ambassadorcon from "~/assets/images/ambassador.svg";
import cardImage from "~/assets/images/card-img.png";
import { useStore } from "../store";
import { storeToRefs } from "pinia";
const route = useRouter();
const goTo = (id) => {
  console.log(id);
  route.push({ path: `/profile/${id}` });
};
const { inspirationData } = storeToRefs(useStore());
</script>
