<template>
  <div v-if="!loading">
    <ClientOnly>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ClientOnly>
  </div>
  <div v-else>
    Loading....
  </div>
</template>
<script setup>
import { useStore } from "@/store/";

const {
  retrieveDataFromAPI,
  retrieveActivityFeedData,
  retrieveInspirationData,
  loading
} = useStore();

onMounted(() => {
  retrieveDataFromAPI();
  retrieveActivityFeedData();
  retrieveInspirationData();
});
</script>
