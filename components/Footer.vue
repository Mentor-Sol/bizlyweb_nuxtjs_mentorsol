<template >
  <template v-if="!isAuthenticated">
    <!-- CODE HERE -->
  </template>
  <template v-if="isAuthenticated">
    <div className="mainFooter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-8">
            <div className="footerInner">
              <h6>Section Title</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis
                libero et libero et libero et... <a href="">Learn more</a>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <div className="footerButton">
              <button @click="showModal">Get the bizly app</button>
              <CustomModal ref="thisModal">
              </CustomModal>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center" v-if="route.path === '/home'">
      Footer will be placed here for new page
    </div>
  </template>
</template>
<script setup>
import { useStore } from "../store"
import { storeToRefs } from "pinia"
const { isAuthenticated } = storeToRefs(useStore())
import { ref } from "vue";
import CustomModal from "./CustomModal.vue";
import { useRoute } from "nuxt/app";
const route = useRoute();
let thisModal = ref(null);
function showModal() {
  thisModal.value.show();
}
</script>