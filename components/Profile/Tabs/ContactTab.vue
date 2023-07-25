
<template>
    <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="TabsWrapper">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-6" v-if="data?.biz_button_options?.schedule_meeting">
                        <p class="tabsHead" role="button" @click="scheduleMeeting(data?.biz_button_options.meeting_url)">
                            Schedule a Meeting
                        </p>
                    </div>
                    <div class="col-lg-6" v-if="data?.biz_button_options?.check_availability">
                        <p class="tabsHead" role="button">Check Availability</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 tabsInner">
                        <div class="socialIcon">
                            <p>Socials</p>
                            <div class="d-flex flex-wrap Icons" v-if="data?.social_networks?.length">
                                <template v-for="(item, index) in data?.social_networks" :key="index">
                                    <span v-if="item?.enabled && item?.network != 'unknown'">
                                        <a target=" _blank" :href="item?.url">
                                            <img :src="socialNetworks[item.network.toLowerCase()]" :alt="item.network" />
                                        </a>
                                    </span>
                                </template>
                            </div>
                            <span class="text-light" v-if="!data?.social_networks?.length">No Social networks added
                                yet</span>

                        </div>
                        <div class="userInfo">
                            <p class="text-capitalize">{{ data?.owner?.first_name + " " + data?.owner?.last_name }}</p>
                            <div v-for="(item, index) in data?.contact_information" :key="index">
                                <div v-if="item.enabled" class="d-flex align-items-center info">
                                    <div class="infoIcon">
                                        <img :src="ContactIcons[item?.contact_type]" :alt="item?.contact_type" />
                                    </div>
                                    <template v-if="item.contact_type.toLowerCase() == 'phone'">
                                        <a class="text-decoration-none" :href="'tel:+' + item.information">
                                            <p>{{ item?.information }}</p>
                                        </a>
                                    </template>
                                    <template v-if="item.contact_type.toLowerCase() == 'mail'">
                                        <a class="text-decoration-none" :href="'mailto:+' + item.information">
                                            <p>{{ item?.information }}</p>
                                        </a>
                                    </template>
                                    <template v-if="item.contact_type.toLowerCase() == 'link'">
                                        <a class="text-decoration-none" :href="item.information" target="_blank">
                                            <p>{{ item?.information }}</p>
                                        </a>
                                    </template>
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
                                    <p class="text-capitalize">{{ data?.owner?.first_name + " " + data?.owner?.last_name }}
                                    </p>
                                    <span>{{ data?.owner?.location }}</span>
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
import GoogleMaps from "../GoogleMaps.vue"
import LocationIcon from "~/src/assets/images/location.svg";
import Phone from "~/src/assets/images/phone.svg";
import Email from "~/src/assets/images/mail.png";
import LinkIcon from "~/src/assets/images/Link.svg";
import Twitter from "~/src/assets/images/twitter.svg";
import Instagram from "~/src/assets/images/instagram.svg";
import Google from "~/src/assets/images/google.svg";
import Facebook from "~/src/assets/images/facebook.svg";
import TikTok from "~/src/assets/images/tiktok.svg";
import Dribbble from "~/src/assets/images/dribbble.svg";
import VK from "~/src/assets/images/vk.svg";
import SnapChat from "~/src/assets/images/snapchat.svg"
import Youtube from "~/src/assets/images/youtube.svg"
import Discord from "~/src/assets/images/discord.svg"
import Tumblr from "~/src/assets/images/tumblr.svg"
import Telegram from "~/src/assets/images/telegram.svg"
import Twitch from "~/src/assets/images/twitch.svg"
import Skype from "~/src/assets/images/skype.svg"
import Spotify from "~/src/assets/images/spotify.svg"
import Figma from "~/src/assets/images/figma.svg"
import Apple from "~/src/assets/images/apple.svg"
import Pinterest from "~/src/assets/images/pinterest.svg"
import Vimeo from "~/src/assets/images/vimeo.svg"
import Linkedin from "~/src/assets/images/linkedin.svg"
import Behance from "~/src/assets/images/behance.svg"
import Github from "~/src/assets/images/github.svg"
import WhatsApp from "~/src/assets/images/whatsapp.svg"
import Messenger from "~/src/assets/images/messenger.svg"
import IMDB from "~/src/assets/images/imdb.svg"
import Reddit from "~/src/assets/images/reddit.svg"
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
    tiktok: TikTok,
    dribbble: Dribbble,
    dribble: Dribbble,
    vk: VK,
    spanchat: SnapChat,
    youtube: Youtube,
    discord: Discord,
    tumblr: Tumblr,
    telegram: Telegram,
    twitch: Twitch,
    skype: Skype,
    spotify: Spotify,
    figma: Figma,
    apple: Apple,
    pinterest: Pinterest,
    vimeo: Vimeo,
    linkedin: Linkedin,
    behance: Behance,
    github: Github,
    whatsapp: WhatsApp,
    messenger: Messenger,
    imdb: IMDB,
    snapchat: SnapChat,
    reddit: Reddit
};
// const biz_button_options = data;
const scheduleMeeting = (string) => {
    window.open(string, "_blank");
};

</script>
<style scoped lang="scss">
.Icons {

    span {
        height: 40px;
        width: 40px;
        margin-right: 15px;
        margin-bottom: 7px;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>