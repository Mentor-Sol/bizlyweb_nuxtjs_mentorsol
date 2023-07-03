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
import ToggleIconCard from "~/assets/images/View_More_Dots.svg";
import LocationIcon from "~/assets/images/location.svg";
import MessageIcon from "~/assets/images/message.svg";
import PlusUserIcon from "~/assets/images/ambassador.svg";
import NoProfilePic from "~/assets/images/NoProfilePic.png";
import { useStore } from "../../store";
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
.inner-insipired-card {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 38%;
  border-radius: 5px;
  padding: 15px 10px;
  height: 360px;
  position: relative;
  cursor: pointer;
  margin-right: 16px;
  overflow: hidden;

  &:last-of-type {
    margin-right: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, black, transparent);
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    position: absolute;
    right: 3%;

    &:focus {
      outline: none;
    }

    &:hover img {
      filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.75))
    }
  }

  img {
    cursor: pointer;
  }

  h5 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 5px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #d9d9d9;
    margin-bottom: 5px;
  }

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

  .home-location {
    margin-bottom: 15px;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #d9d9d9;
      margin-bottom: 0;
    }
  }
}
</style>
