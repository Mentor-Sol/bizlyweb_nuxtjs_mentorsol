<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby=""
    aria-hidden="true"
    ref="modalEle"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header w-100 d-flex flex-row-reverse">
          <img
            :src="CloseIcon"
            data-bs-dismiss="modal"
            alt="Self "
          />
        </div>
        <div class="modal-body p-0 BizzAppBody">
          <div className="BizzAppModal">
            <img :src="ModalIcon" alt="Self " />
            <p>oops!</p>
            <span>
              Looks like we're getting ahead of ourselves! Want to see more?
              Download the app today!
            </span>
            <CustomButton text="Get the App" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";
import ModalIcon from "../assets/images/modalicon.svg";
import CloseIcon from "../assets/images/closeIcon.svg";

let modalEle = ref(null);
let thisModalObj = null;

onMounted(() => {
  thisModalObj = new Modal(modalEle.value);
});
function _show() {
  thisModalObj.show();
}
defineExpose({ show: _show });
</script>