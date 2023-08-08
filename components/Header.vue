<template>
  <template v-if="!isAuthenticated">
    <div class="landing-header" v-show="!isScroll">
      <div class="Logo">
        <img :src="Logo" alt="bizly" width="80" height="36" />
      </div>
      <div class="nav">
        <ul>
          <li>bizlyCard</li>
          <li>Who is it For</li>
          <li>Our Mission</li>
        </ul>
        <div class="button">join the waitlist</div>
      </div>
    </div>
    <div class="mobileHeader">
      <div class="mobLogo">
        <img src="../src/assets/images/Logo.svg" alt="" />
      </div>
      <button class="mobNav" @click="toggleHeader()">
        <img src="../src/assets/images/dot.svg" alt="" />
      </button>
    </div>
  </template>
  <template v-if="['/', '/home/'].includes(route.path) && isAuthenticated">
    <div class="Home-header">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-between">
          <div class="logo">
            <img src="../src/assets/images/Logo.svg" alt="" />
          </div>
          <div class="header-icons d-flex gap-3 align-items-center">
            <div class="notification-icon">
              <img src="../src/assets/images/bookmark1.svg" alt="" />
            </div>
            <div class="notification-icon">
              <!-- @click="toggleNotificationComponent" -->
              <img src="../src/assets/images/bell1.svg" alt="" />
              <span>5</span>
            </div>
            <div class="notification-icon">
              <img src="../src/assets/images/message1.svg" alt="" />
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
import Logo from "../src/assets/images/Logo.svg";
const { isAuthenticated } = storeToRefs(useStore());
const route = useRoute();
// import NotificationComponent from "../components/NotificationDetail.vue";
import { useRoute } from "nuxt/app";
import { useHeaderModal } from "../composables/useModal";
import { useScroll } from "../composables/useScroll";
const isHeaderOpen = useHeaderModal();
const isScroll = useScroll();
const toggleHeader = () => {
  isHeaderOpen.value = !isHeaderOpen.value;
};
window.addEventListener("scroll", (e) => {
  document.scrollHeight;
});
</script>
<style lang="scss" scoped>
.custom-select {
  position: relative;
  display: inline-block;
}

.custom-select select {
  width: 120px;
  padding: 0px 0px 0px 6px;
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
.dropdown-icon::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-left: 2px solid #999;
  border-bottom: 2px solid #999;
  transform: rotate(-45deg);
}

.landing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  height: 100px;
  border: none;
  background-color: transparent !important;
}

.landing-header {
  position: fixed;
  top: 0%;
  width: 100%;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    gap: 2rem;
  }
}
.nav ul {
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10rem;
  margin: 0px;
  cursor: pointer;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    gap: 2rem;
  }
}
.nav ul li {
  list-style: none;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.05em;
}
.nav ul li:hover {
  color: #2998ff;
}

.nav .button {
  color: white;
  background: repeat padding-box border-box 0% 0% / auto auto scroll
    linear-gradient(
      77deg,
      rgba(41, 152, 255, 0.31) 4%,
      rgba(41, 152, 255, 0.13) 50%,
      rgba(41, 152, 255, 0.27) 84%
    );
  height: 45px;
  border-radius: 5px;
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  display: flex;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  border: 1px solid #2998ff;
  transition: all 0.3s ease-in-out 0s, visibility 0s;
  padding: 0px 3rem;
  box-shadow: -2.83px 2.83px 46px 3px rgba(0, 0, 0, 0);
  cursor: pointer;
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    height: 40px;
    min-width: 100px;
    font-size: 12px;
    padding: 0px 1rem;
  }
}
.button:hover {
  background: repeat padding-box border-box 0% 0% / auto auto scroll
    linear-gradient(
      134deg,
      rgba(41, 152, 255, 0.51) 0%,
      rgba(41, 152, 255, 0.6) 46%,
      rgba(41, 152, 255, 0.6) 100%
    );
  box-shadow: -2.83px 2.83px 46px 3px rgba(0, 0, 0, 0.65);
}

.mobileHeader {
  background: #000510;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 1rem;
}
.mobLogo {
  img {
    width: 100px;
    height: 32px;
  }
}
.mobNav {
  background: transparent;
  border: 0px;
  box-shadow: none;
  img {
    width: 25px;
    height: 25px;
  }
}
@media screen and (max-width: 768px) {
  .landing-header {
    display: none;
  }
  .mobileHeader {
    display: flex;
  }
}
@media screen and (min-width: 769px) {
  .mobileHeader {
    display: none;
  }
}
</style>
