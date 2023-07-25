<template>
    <div class="intouch-container mb-3">
        <button class="intouch-button">
            <img :src="ContactIcon" alt="contact_support" />
            Contact Support
        </button>
        <button class="intouch-button">
            <img :src="CommunityIcon" alt="contact_support" />
            Join the Community
        </button>
        <button class="intouch-button">
            <img :src="WishIcon" alt="contact_support" />
            Feature Wish
        </button>
        <button class="intouch-button">
            <img :src="AmbassadorIconOne" alt="contact_support" />
            Become an Ambassador
        </button>
        <button class="intouch-button">
            <img :src="LogoIcon" alt="contact_support" />
            Beyond the bizApp
        </button>
    </div>
</template>
<script setup>
import ContactIcon from "~/src/assets/images/support1.svg"
import CommunityIcon from "~/src/assets/images/community1.svg"
import WishIcon from "~/src/assets/images/featurewish1.svg"
import AmbassadorIconOne from "~/src/assets/images/ambassador1.svg"
import LogoIcon from "~/src/assets/images/bizlyLogo.svg"



</script>
<style scoped lang="scss">
.intouch-container {

    justify-content: space-between;
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }

    .intouch-button {
        background-color: #546b91;
        padding: 12px 15px;
        border-radius: 25px;
        border: none;
        outline: none;
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        margin-right: 10px;

        &:last-of-type {
            margin-right: 0;
        }

        img {
            margin-right: 5px;
        }
    }
}
</style>