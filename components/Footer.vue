<template>
  <div>
    <div className="mainFooter">
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
  </div>
</template>
<script setup>
import { ref } from "vue";
import CustomModal from "./CustomModal.vue";

let thisModal = ref(null);
function showModal() {
  thisModal.value.show();
}
</script>