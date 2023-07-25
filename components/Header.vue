<template>
  <template v-if="!isAuthenticated">
    <!-- CODE HERE -->
  </template>
  <template v-if="['/', '/home/'].includes(route.path) && isAuthenticated">
    <div class="Home-header">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-between">
          <div class="logo">
            <img src="../public/assets/images/Logo.svg" alt="" />
          </div>
          <div class="header-icons d-flex gap-3 align-items-center">
            <div class="notification-icon">
              <img src="../public/assets/images/bookmark1.svg" alt="" />
            </div>
            <div class="notification-icon">
              <!-- @click="toggleNotificationComponent" -->
              <img src="../public/assets/images/bell1.svg" alt="" />
              <span>5</span>
            </div>
            <div class="notification-icon">
              <img src="../public/assets/images/message1.svg" alt="" />
              <span>9+</span>
            </div>
            <!-- <NotificationComponent v-if="showNotificationComponent" /> -->
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup>
import { useStore } from "../store";
import { storeToRefs } from "pinia";
const { isAuthenticated } = storeToRefs(useStore());
const route = useRoute();
// import NotificationComponent from "../components/NotificationDetail.vue";
import { useRoute } from 'nuxt/app';
</script>
<style lang="scss" scoped>
.custom-select {
  position: relative;
  display: inline-block;
}

.custom-select select {
  width: 120px;
  padding: 0px 0 0 6px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #f7f8fb;
}

.custom-select select:focus-visible {
  outline: none;
}

.dropdown-icon {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Example styling for the dropdown icon */
.dropdown-icon::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-left: 2px solid #999;
  border-bottom: 2px solid #999;
  transform: rotate(-45deg);
}
</style>