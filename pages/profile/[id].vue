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
              <button>Download bizly</button>
              <div>

                <a href="#">Terms & Conditions<span></span></a>
                <a href="#">Privacy Policy<span></span></a>
                <a href="#">Report Page</a>
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
<style scoped lang="scss">
.downloadBizly {
  background-color: #000000;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  .downloadBtn {
    button {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #141414;
      background: #ffffff;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 16px;
      border: none !important;
      width: 60%;
      margin-bottom: 50px;
    }

    a {
      color: #838383;
      text-decoration: none;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;

      span {
        height: 3px;
        width: 3px;
        margin: 2px 10px;
        background-color: #838383;
        border: 1px solid #838383;
        display: inline-block;
        border-radius: 50%;
      }
    }
  }
}
</style>