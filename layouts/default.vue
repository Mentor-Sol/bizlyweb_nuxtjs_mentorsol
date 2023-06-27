<template>
  <div v-if="loading" class="loading-div">
    <div class="loading-bar"></div>
  </div>
  <Header />
  <slot />
  <Footer />
</template>
<script setup >
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { storeToRefs } from 'pinia';
import { useStore } from "../store";
import { onMounted, onUpdated } from 'vue';
const { loading } = storeToRefs(useStore());

onMounted(() => {
  console.log(loading.value);
})
onUpdated(() => {
  console.log(loading.value)
}, loading)
</script>
<style>
.loading-div {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.loading-bar {
  height: 2px;
  /* width: 100%; */
  background-color: #3676dd;
  animation: moveLoader 2s ease-in-out infinite;
  z-index: 1;
}

@keyframes moveLoader {
  to {
    width: 100%
  }

  from {
    width: 0%;
  }
}
</style>