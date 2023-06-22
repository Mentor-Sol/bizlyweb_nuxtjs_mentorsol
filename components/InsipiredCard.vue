<template>
  <div class="inner-insipired-card current-card" @click="goTo(item?.biz_card_id)" v-for="(item, index) in inspirationData"
    :key="index" :style="`background-image: url(${item?.image || NoProfilePic})`">
    <div>
      <button>
        <img :src="ToggleIconCard" alt="Self " />
      </button>
    </div>

    <div class="userinfo">
      <h5>{{ item?.first_name + " " + item?.last_name }}</h5>
      <p v-for="role in  item?.roles">{{ role.name }}</p>
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
const route = useRouter();
const goTo = (id) => {
  route.push({ path: `/profile/${id}` });
};
const { inspirationData } = storeToRefs(useStore());
</script>
<style lang="scss">
.userinfo {
  position: absolute;
  bottom: 2%;
  text-align: center;
  width: 100%;
  z-index: 1;
}
</style>
