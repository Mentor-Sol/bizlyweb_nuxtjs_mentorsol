<template>
  <div className="inputField">
    <input  v-model="inputValue"  :placeholder="placeholder" />
  </div>
</template>
<script setup>
const inputValue = ref('');


defineProps({
  placeholder: String,
});
</script>