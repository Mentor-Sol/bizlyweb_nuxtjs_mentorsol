<template>
  <div className="mainHeader d-flex align-items-center" v-if="route.path === '/'">
    <div className="container  ">
      <div className="row align-items-center">
        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6">
          <div className="headerWrapper d-flex gap-2 align-items-center">
            <div className="headerInner">
              <img :src="data?.owner?.image" alt="userIcon" width="30" height="30" />
            </div>
            <div className="userName">
              <h3>
                {{ data?.owner?.first_name }} {{ data?.owner?.last_name }}
              </h3>
              <p>{{ data?.owner?.roles.join(" . ") }}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
          <div className="headerField d-flex gap-2 justify-content-end">
            <InputField v-model="myValue" placeholder="Email" />
            <p>You entered: {{ myValue }}</p>

            <CustomButton text="Join" />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="Home-header" v-if="route.path === '/home'">
    <div class="container-fluid">
     
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-between">
          <div class="logo">
              <img src="../assets/images/Home-Logo.png" alt="">
          </div>
          <div class="header-icons d-flex gap-3 align-items-center">
            <div class="notification-icon">
              <img src="../assets/images/bookmark.png" alt="">

            </div>
           <div class="notification-icon"  @click="toggleNotificationComponent">
            <img src="../assets/images/notification.png" alt="" >
            <span>5</span>
           </div>
           <div class="notification-icon"> 
            <img src="../assets/images/message.png" alt="" >
            <span>9+</span>

           </div>
        
    <NotificationComponent v-if="showNotificationComponent" />

 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "@/store/";
import { storeToRefs } from "pinia";
import NotificationComponent from '../components/NotificationDetail.vue'
const { data } = storeToRefs(useStore());
const myValue = ref('');
const route = useRoute();


</script>
<script>
export default {
  components: {
    NotificationComponent
  },
  data() {
    return {
      showNotificationComponent: false
    }
  },
  methods: {
    toggleNotificationComponent() {
      this.showNotificationComponent = !this.showNotificationComponent
    }
  }
}</script>