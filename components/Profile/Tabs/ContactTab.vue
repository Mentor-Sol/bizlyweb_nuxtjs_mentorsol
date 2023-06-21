
<template>
    <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="TabsWrapper">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-6">
                        <p class="tabsHead" role="button" @click="scheduleMeeting">
                            Schedule a Meeting
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <p class="tabsHead" role="button">Check Availability</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 tabsInner">
                        <div class="socialIcon">
                            <p>Socials</p>
                            <div class="d-flex Icons" v-if="data?.social_networks?.length">
                                <span v-for="(item, index) in data?.social_networks" :key="index">
                                    <a v-if="item.enabled" :href="item.url" target="_blank">
                                        <img :src="socialNetworks[item.network]" :alt="item.network" />
                                    </a>
                                </span>
                            </div>
                            <span class="text-light" v-if="!data?.social_networks?.length">No Social networks added
                                yet</span>

                        </div>
                        <div class="userInfo">
                            <p>{{ data?.owner?.first_name + " " + data?.owner?.last_name }}</p>
                            <div v-for="(item, index) in data?.contact_information" :key="index">
                                <div v-if="item.enabled" class="d-flex align-items-center info">
                                    <div class="infoIcon">
                                        <img :src="ContactIcons[item?.contact_type]" :alt="item?.contact_type" />
                                    </div>
                                    <p>{{ item?.information }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 tabsInner">
                        <div class="userInfo">
                            <div class="d-flex align-items-center info infoLocation">
                                <div class="infoIcon">
                                    <img :src="LocationIcon" height="12" width="12" alt="location" />
                                </div>
                                <div>
                                    <p>{{ data?.owner?.first_name + " " + data?.owner?.last_name }}</p>
                                    <span>{{ data?.owner.location }}</span>
                                </div>
                            </div>
                            <div class="tabMap">
                                <GoogleMaps />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FullBizCard } from '../../../models/ProfileData/FullBizCard';

import Twitter from "~/assets/images/Twitter.svg";
import Instagram from "~/assets/images/instagram.svg";
import Google from "~/assets/images/Google.svg";
import LinkedIn from "~/assets/images/Twitter.svg";
import Facebook from "~/assets/images/facebook.svg";
import GoogleMaps from "../../GoogleMaps.vue"
import Phone from "~/assets/images/phone.svg";
import Email from "~/assets/images/mail.png";
import LinkIcon from "~/assets/images/Link.svg";
import TikTok from "~/assets/images/tiktok.svg";
import LocationIcon from "~/assets/images/location.svg";

defineProps({
    data: FullBizCard
})


const ContactIcons = {
    phone: Phone,
    mail: Email,
    link: LinkIcon,
};

const socialNetworks = {
    facebook: Facebook,
    twitter: Twitter,
    google: Google,
    instagram: Instagram,
    linkedin: LinkedIn,
    tiktok: TikTok,
};
// console.log(data)
// const biz_button_options = data;
// const scheduleMeeting = () => {
//     window.open(data);
// };

</script>
<style scoped lang="scss">
.Icons {
    span {
        height: 50px;
        width: 50px;
        margin-right: 5px;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>