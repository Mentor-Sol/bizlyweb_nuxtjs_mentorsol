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
<style lang="scss">
.CustomButton {
  button {
    font-weight: 600;
    font-size: 14px;
    color: #141414;
    border: none;
    padding: 6px 24px;
    line-height: 24px;
    background: #ffffff;
    border-radius: 25px;
    border: none !important;
    min-width: 270px;
    max-width: fit-content;
    height: 45px;

  }
}
</style>