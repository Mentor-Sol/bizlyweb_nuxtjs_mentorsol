<template>
  <div>
    <Navigation :data="dataBizCard" />
    <Banner :data="dataBizCard" />
    <TabsData :data="dataBizCard" />
    <div className="downloadBizly">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="downloadBtn">
              <CustomButton text="Download bizly" />
              <div className="userName">
                <p>Terms and Conditions<span> . </span>Privacy Policy<span> . </span>Report Page</p>
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
import Banner from "../../components/Profile/Banner.vue"
import TabsData from "../../components/Profile/TabsData.vue";
import Navigation from '../../components/Profile/Navigation.vue';
const route = useRoute();
const { retrieveBizCardById } = useStore();
const { dataBizCard } = storeToRefs(useStore());
onMounted(() => {
  retrieveBizCardById(route.params.id);
});
</script>
