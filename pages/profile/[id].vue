<template>
  <div>
    <Banner :data="dataBizCard" />
    <TabsData :data="dataBizCard" />
    <div className="downloadBizly">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="downloadBtn">
              <CustomButton text="Download bizly" />
              <div className="userName">
                <p>Editor <span>.</span> Writer <span>.</span> Producer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "@/store/";
import { storeToRefs } from "pinia";
const route = useRoute();
const { data, dataBizCard } = storeToRefs(useStore());
const { retrieveBizCardById } = useStore();
onMounted(() => {
  retrieveBizCardById(route.params.id);
});
</script>
