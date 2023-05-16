<template>
  <div class="inner-insipired-card" v-for="(item,index) in data" :key="index">
    <div class="d-flex justify-content-end">
      <img src="../assets/images/toggle-icon-card.png " alt="" />
    </div>
    <div>
      <h5>{{ item?.name }}</h5>
      <p>Photographer <span>.</span> Colodjuhuoi</p>
      <div
        class="d-flex align-items-center gap-1 home-location justify-content-center"
      >
        <img src="../assets/images/location.svg" alt="" />
        <p>Miami, FL</p>
      </div>
      <div class="d-flex align-items-center gap-4 justify-content-center">
        <img src="../assets/images/message.svg" alt="" />
        <img src="../assets/images/ambassador.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    name: "Tyler Maxwell",

  },
  { name: "Tyler Maxwell" },
  { name: "Tyler Maxwell" },
];
</script>
