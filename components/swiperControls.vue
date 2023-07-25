<script setup>
const swiper = useSwiper()
</script>

<template>
  <button @click="swiper.slideNext()" className="next">&#8250;</button>
  <button @click="swiper.slidePrev()" className="prev">&#8249;</button>
</template>
<style scoped>
.next {
  position: absolute;
  bottom: 250px;
  right: 27px;
  z-index: 9999;
  background-color: transparent;
  color: #ffff;
  border: none;
  font-size: 49px;

}

.prev {
  position: absolute;
  left: 27px;
  bottom: 250px;
  z-index: 9999;
  background-color: transparent;
  color: #ffff;
  border: none;
  font-size: 49px;
}
</style>