<template>
  <div className="CustomButton">
    <button>{{ text }}</button>
  </div>
</template>
<script setup>
defineProps({
  text: String,
});
</script>