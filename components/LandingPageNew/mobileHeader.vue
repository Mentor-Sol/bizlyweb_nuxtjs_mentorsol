<template>
  <div>
    <div id="myModal" class="modal" :class="isHeaderOpen ? 'show' : null">
      <div class="close" @click="toggleHeader()">
        <svg
          preserveAspectRatio="none"
          data-bbox="65.35 65.35 69.3 69.3"
          viewBox="65.35 65.35 69.3 69.3"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          width="20"
          height="20"
          role="img"
          aria-label="Close Site Navigation"
        >
          <g>
            <path
              fill="#fff"
              d="M134.65 128.99L105.66 100l28.99-28.99-5.66-5.66L100 94.34 71.01 65.35l-5.66 5.66L94.34 100l-28.99 28.99 5.66 5.66L100 105.66l28.99 28.99 5.66-5.66z"
            ></path>
          </g>
        </svg>
      </div>
      <div class="nav">
        <ul>
          <li>bizlyCard</li>
          <li>Who is it for</li>
          <li>Our mission</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeaderModal } from "../../composables/useModal";

const isHeaderOpen = useHeaderModal();
const toggleHeader = () => {
  isHeaderOpen.value = !isHeaderOpen.value;
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 40;
  justify-content: center;
  align-items: center;
  &:is(.show) {
    display: block;
  }
}

/* Styles for the modal content */
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
}

.close {
  background: transparent;
  display: flex;
  justify-content: flex-end;
  padding: 2.5rem 0.8rem;
  border: 0px;
}
.nav {
  display: flex;
  justify-content: center;
  ul {
    padding: 0rem 1rem;
    width: 100%;
    li {
      font-size: 1.33rem;
      color: #fff;
      list-style: none;
      text-align: center;
      padding: 7px 0px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0.1px;
    }
  }
}
</style>
