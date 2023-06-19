<template>
  <div class="inner-tabs-wrapper" v-for="feed in links">
    <div class="inner-header-tabs d-flex justify-content-between">
      <div class="header-tabs-name d-flex align-items-center gap-1">
        <div>
          <img :src="BlackImgVideo" alt="" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <p>{{ feed?.data?.children.length }}</p>
          <p>{{ feed?.data?.title || "Image name" }}</p>
          <span>{{ usePostCreationTime(feed?.data?.created_on) }}</span>
        </div>
      </div>
      <div class="header-tabs-icons d-flex gap-4 align-items-center">
        <img :src="bookmarket" alt="" />
        <img :src="MenuTab" alt="" />
      </div>
    </div>
    <div class="Tabs-title d-flex align-items-center gap-3">
      <div>
        <img :src="feed?.data?.image" alt="" class="profile-img" />
      </div>
      <div class="Tabs-title-name">
        <h5>
          {{ feed?.data?.owner?.first_name + " " + feed?.data?.owner?.last_name }}
          <span>{{ feed?.data?.pronouns?.[0] ? "(" + feed?.data?.pronouns?.[0] + ")" : "" }}
          </span>
        </h5>
        <div class="d-flex align-items-center gap-3 Tabs-feilds" v-for="(role, index) in feed?.data?.owner?.roles"
          :key="index">
          <span>{{ role }}</span>
        </div>
      </div>
    </div>
    <div class="tabs-desc">
      <p>
        {{ feed?.data?.owner?.description }}
      </p>
    </div>
    <LinkThumbnails :links="feed?.data?.children" :data="feed?.data" />
    <div class="inner-footer-tabs d-flex justify-content-around">
      <div class="footer-messages d-flex align-items-center gap-2">
        <img :src="Messagetabs" alt="" />
        <p>bizMessage</p>
      </div>
      <div class="footer-share d-flex align-items-center gap-2">
        <img :src="ShareTabImage" alt="" />
        <p>Share</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShareTabImage from "~/assets/images/share-tabs.png";
import Messagetabs from "~/assets/images/message-tabs.png";
import BlackImgVideo from "~/assets/images/Link.png";
import bookmarket from "~/assets/images/bookmark-tabs.png";
import MenuTab from "~/assets/images/Menu_tabs.png";
import LinkThumbnails from "./LinkThumbnails.vue";
var links = [
  {
    data: {
      id: 174,
      is_bookmarked: false,
      created_on: "2023-06-09T18:26:14.876380Z",
      modified: "2023-06-12T13:58:37.094150Z",
      owner: {
        id: 112,
        first_name: "chadi",
        last_name: "ayari",
        pronouns: [],
        image: "https://storage.googleapis.com/demo-api.bizly.net/media/profiles/2023/05/18/04/02/bfc486b7-5dd.jpg",
        background_images: [
          "https://ik.imagekit.io/bizapp/images/image_picker_19DBD3F3-6999-41DC-842B-143B33F081D2-74133-00000C8831BEA582_UCpvXuBVp.jpg"
        ],
        roles: [
          "Graphics Operator"
        ],
        location: "Tunis, PA",
        occupation: null
      },
      biz_card: 52,
      children: [
        {
          id: 175,
          is_bookmarked: false,
          created_on: "2023-06-09T18:26:14.891548Z",
          modified: "2023-06-12T13:58:37.107394Z",
          owner: {
            id: 112,
            first_name: "chadi",
            last_name: "ayari",
            pronouns: [],
            image: "https://storage.googleapis.com/demo-api.bizly.net/media/profiles/2023/05/18/04/02/bfc486b7-5dd.jpg",
            background_images: [
              "https://ik.imagekit.io/bizapp/images/image_picker_19DBD3F3-6999-41DC-842B-143B33F081D2-74133-00000C8831BEA582_UCpvXuBVp.jpg"
            ],
            roles: [
              "Graphics Operator"
            ],
            location: "Tunis, PA",
            occupation: null
          },
          biz_card: 52,
          children: [],
          invited_collaborators: [],
          collaborators: [],
          is_featured: false,
          is_posted: false,
          post_content: null,
          status: null,
          is_gallery: false,
          title: "qqqqddd",
          description: "qqqqqq",
          content_type: null,
          external_type: null,
          audio_file: null,
          external_url: null,
          image_kit_id: "https://www.facebook.com",
          thumbnail_image_kit_id: "",
          image_kit_ids: [
            "https://www.facebook.com/images/fb_icon_325x325.png"
          ],
          tags: [],
          pronouns: [],
          is_contact: false,
          contact_id: null,
          is_following: false
        },
        {
          id: 176,
          is_bookmarked: false,
          created_on: "2023-06-09T18:26:14.901794Z",
          modified: "2023-06-12T13:58:37.128002Z",
          owner: {
            id: 112,
            first_name: "chadi",
            last_name: "ayari",
            pronouns: [],
            image: "https://storage.googleapis.com/demo-api.bizly.net/media/profiles/2023/05/18/04/02/bfc486b7-5dd.jpg",
            background_images: [
              "https://ik.imagekit.io/bizapp/images/image_picker_19DBD3F3-6999-41DC-842B-143B33F081D2-74133-00000C8831BEA582_UCpvXuBVp.jpg"
            ],
            roles: [
              "Graphics Operator"
            ],
            location: "Tunis, PA",
            occupation: null
          },
          biz_card: 52,
          children: [],
          invited_collaborators: [],
          collaborators: [],
          is_featured: false,
          is_posted: false,
          post_content: null,
          status: null,
          is_gallery: false,
          title: "qsdqsd",
          description: "qsdsqdqsd",
          content_type: null,
          external_type: null,
          audio_file: null,
          external_url: null,
          image_kit_id: "google.com",
          thumbnail_image_kit_id: "",
          image_kit_ids: [
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png"
          ],
          tags: [],
          pronouns: [],
          is_contact: false,
          contact_id: null,
          is_following: false
        },
        {
          id: 177,
          is_bookmarked: false,
          created_on: "2023-06-12T13:56:03.729269Z",
          modified: "2023-06-12T13:58:37.148435Z",
          owner: {
            id: 112,
            first_name: "chadi",
            last_name: "ayari",
            pronouns: [],
            image: "https://storage.googleapis.com/demo-api.bizly.net/media/profiles/2023/05/18/04/02/bfc486b7-5dd.jpg",
            background_images: [
              "https://ik.imagekit.io/bizapp/images/image_picker_19DBD3F3-6999-41DC-842B-143B33F081D2-74133-00000C8831BEA582_UCpvXuBVp.jpg"
            ],
            roles: [
              "Graphics Operator"
            ],
            location: "Tunis, PA",
            occupation: null
          },
          biz_card: 52,
          children: [],
          invited_collaborators: [],
          collaborators: [],
          is_featured: false,
          is_posted: false,
          post_content: null,
          status: null,
          is_gallery: false,
          title: "",
          description: "",
          content_type: null,
          external_type: null,
          audio_file: null,
          external_url: null,
          image_kit_id: "https://www.LinkedIn.com",
          thumbnail_image_kit_id: "",
          image_kit_ids: [
            "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"
          ],
          tags: [],
          pronouns: [],
          is_contact: false,
          contact_id: null,
          is_following: false
        }
      ],
      invited_collaborators: [],
      collaborators: [],
      is_featured: false,
      is_posted: true,
      post_content: "",
      status: "published",
      is_gallery: true,
      title: "link title",
      description: "link gallery descritiondddddqsd",
      content_type: "link_gallery",
      external_type: null,
      audio_file: null,
      external_url: "",
      image_kit_id: "https://www.facebook.com",
      thumbnail_image_kit_id: "https://ik.imagekit.io/bizapp/images/image_picker_B952E02C-A0B0-46B7-B752-E4725A905115-66790-000062039CABA4BA_HHIuxT8tD.jpg",
      image_kit_ids: [
        "https://www.facebook.com/images/fb_icon_325x325.png"
      ],
      tags: [],
      pronouns: [],
      is_contact: false,
      contact_id: null,
      is_following: false
    }
  }
]
</script>
<style>
.img-div {
  position: relative;
}

.accessibility_bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
  