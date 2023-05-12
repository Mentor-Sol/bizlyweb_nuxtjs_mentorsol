<template>
  <div>
    <Header v-if="route.path === '/'"/>
    <slot />
    <Footer v-if="route.path === '/'"/>
  </div>
</template>
<script setup>
const route = useRoute();
</script>