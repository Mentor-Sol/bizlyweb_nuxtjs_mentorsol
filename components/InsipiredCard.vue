<template>
  <div class="inner-insipired-card" v-for="(item,index) in data" :key="index">
    <div class="d-flex justify-content-end">
      <img :src="ToggleIconCard" alt="Self " />
  
    </div>
    <div>
      <h5>{{ item?.name }}</h5>
      <p>Photographer <span>.</span> Colodjuhuoi</p>
      <div
        class="d-flex align-items-center gap-1 home-location justify-content-center"
      >
      <img :src="LocationIcon" alt="Self " />

        <p>Miami, FL</p>
      </div>
      <div class="d-flex align-items-center gap-4 justify-content-center">
        <img :src="MessageIcon" alt="Self " />
        <img :src="Ambassadorcon" alt="Self " />
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleIconCard from "~/assets/images/toggle-icon-card.png"
import LocationIcon from "~/assets/images/location.svg"
import MessageIcon from "~/assets/images/message.svg"
import Ambassadorcon from "~/assets/images/ambassador.svg"




const data = [
  {
    name: "Tyler Maxwell",

  },
  { name: "Tyler Maxwell" },
  { name: "Tyler Maxwell" },
  { name: "Tyler Maxwell" },
];

</script>
