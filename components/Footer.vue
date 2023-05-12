<template>
  <div>
    <div className="mainFooter" v-if="route.path === '/'">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="footerInner">
              <h6>Section Title</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis
                libero et libero et libero et... <a href="">Learn more</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
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
  </div>
</template>
<script setup>
import { ref } from "vue";
import CustomModal from "./CustomModal.vue";
const route = useRoute();

let thisModal = ref(null);
function showModal() {
  thisModal.value.show();
}
</script>