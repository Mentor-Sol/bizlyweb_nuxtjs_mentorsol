<template>
  <div class="inner-insipired-card current-card" @click="goTo(item?.biz_card_id)" v-for="(item, index) in inspirationData"
    :key="index" :style="`background-image: url(${item?.image || NoProfilePic})`">

    <button>
      <img :src="ToggleIconCard" alt="Self " />
    </button>
    <div class="userinfo">
      <p class="name-text">{{ item?.first_name + " " + item?.last_name }}</p>
      <p class="role_name" v-for="role in item?.roles">{{ role.name }}<span></span></p>
      <div class="d-flex align-items-center gap-1 home-location justify-content-center">
        <img :src="LocationIcon" alt="Self" height="12" width="12" />
        <p>{{ item?.location || "" }}</p>
      </div>
      <div class="d-flex align-items-center gap-4 justify-content-center">
        <img :src="MessageIcon" alt="Self " v-if="item?.is_following" height="20" width="20" />
        <img :src="PlusUserIcon" alt="Self " v-if="!item?.is_following" height="20" width="20" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleIconCard from "~/assets/images/toggle-icon-card.png";
import LocationIcon from "~/assets/images/location.svg";
import MessageIcon from "~/assets/images/message.svg";
import PlusUserIcon from "~/assets/images/ambassador.svg";
import NoProfilePic from "~/assets/images/NoProfilePic.png";
import { useStore } from "../store";
import { storeToRefs } from "pinia";
import { onMounted } from 'vue';
const route = useRouter();
const goTo = (id) => {
  route.push({ path: `/profile/${id}` });
};
const { retrieveInspirationData } = useStore();
onMounted(() => {
  retrieveInspirationData();
})
const { inspirationData } = storeToRefs(useStore());
</script>
<style lang="scss">
.userinfo {
  position: absolute;
  bottom: 5%;
  text-align: center;
  width: 100%;
  z-index: 1;
  left: 0;
  right: 0;

  p.name-text {
    font-size: 1.125rem !important;
    font-weight: 500 !important;
  }

  p.role_name {
    display: inline-block;

    span {
      display: inline-block;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      margin: 2px 5px;
      background-color: white;
    }

    &:last-of-type {
      span {
        display: none;
      }
    }
  }
}
</style>
