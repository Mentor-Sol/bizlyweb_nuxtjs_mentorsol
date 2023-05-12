<template>
  <div className="BannerWrapper">
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-lg-12">
          <div className="bannerImg">
            <Slick>
              <div className="inner-bannerImg">
                <img :src="data?.owner?.image" alt="userIcon" />
              </div>
            </Slick>
          </div>

          <div className="bannerInner container">
            <div className="userName">
              <h3 class="text-transform">
                {{ data?.owner?.first_name }} {{ data?.owner?.last_name }}
              </h3>
              <p>{{ data?.owner?.roles.join(" . ") }}</p>
              <div className="socialWork d-flex gap-4">
                <p v-for="(item, index) in data?.professional_skills" :key="{ index }">{{ item }}</p>
              </div>
              <div>
                <div className="d-flex gap-2 SelfEmployed">
                  <img :src="SelfEmployeeIcon" alt="Self " />
                  <p>{{ toUpperCaseFirstLetter(data?.owner?.occupation?.employment_type) }}</p>
                </div>
                <div className="d-flex gap-2  SelfEmployed">
                  <img :src="LocationIcon" alt="Self " />
                  <p>{{ data?.owner?.location }}</p>
                </div>
              </div>
              <div className="bannerDesc">
                <p>{{ data?.about }}</p>
              </div>
              <div className="d-flex messageIcon">
                <img :src="MessageIcon" alt="Ambassador" />
                <img :src="PlusUserIcon" alt="Ambassador" />
              </div>
              <div v-for="(item, index) in data?.buttons" :key="{ index }" className="bannerBtn">
                <CustomButton :text="item?.title" @click="handleClick(item)" />
              </div>
              <div className="tags">
                <div v-for="(item, index) in data?.tags" :key="index">
                  <p>{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SelfEmployeeIcon from "~/assets/images/self.svg"
import LocationIcon from "~/assets/images/location.svg"
import MessageIcon from "~/assets/images/message.svg"
import PlusUserIcon from "~/assets/images/ambassador.svg"

defineProps({
  data: [Object, Array],
});

function handleClick(item) {
  window.open(item.url);
}

function toUpperCaseFirstLetter(letter) {
  const arr = letter?.replace("-", ' ').split(" ");
  for (var i = 0; i < arr?.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr?.join(" ");
  return str2
}
</script>

<style lang="scss" scoped>
.text-transform {
  text-transform: capitalize;
}
</style>