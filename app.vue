<template>
  <div>
    <ClientOnly>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ClientOnly>
  </div>
</template>
<script setup>
import { useStore } from "@/store/";

const {
  retrieveDataFromAPI,
  retrieveActivityFeedData,
  retrieveInspirationData,
} = useStore();

onMounted(() => {
  retrieveDataFromAPI();
  retrieveActivityFeedData();
  retrieveInspirationData();
});
</script>
