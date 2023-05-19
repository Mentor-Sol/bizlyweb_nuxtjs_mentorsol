<template>
    <div class="getintouch d-flex gap-2 align-items-center">
       <div class="inner-getintouch d-flex align-items-center gap-2">
        <img :src="HeadphoneIcon" alt="Self " />

        <p>Contact Support</p>
       </div>
       <div class="inner-getintouch  d-flex align-items-center gap-2">
        <img :src="UserIcon" alt="Self " />

        <p>Join the Community</p>
       </div>
       <div class="inner-getintouch  d-flex align-items-center gap-2">
        <img :src="WishIcon" alt="Self " />
        <p>Feature Wish</p>
       </div>
       <div class="inner-getintouch  d-flex align-items-center gap-2">
        <img :src= "AmbassadorIconOne" alt="Self " />

        <p>Become an Ambassador</p>
       </div>
    </div>
</template>
<script setup>
import HeadphoneIcon from "~/assets/images/headphone.png"
import UserIcon from "~/assets/images/users.png"
import WishIcon from "~/assets/images/wish.png"
import AmbassadorIconOne from "~/assets/images//ambassadorone.png"



</script>