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
const { loading } = storeToRefs(useStore());

</script>
<style>
.loading-div {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.loading-bar {
  height: 2px;
  background-color: #3676dd;
  animation: moveLoader 2s ease-in-out infinite;
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