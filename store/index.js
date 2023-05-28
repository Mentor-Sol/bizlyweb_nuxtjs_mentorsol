import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "api-data",
  state: () => {
    return {
      data: [],
      feedData: [],
      inspirationData: [],
    };
  },
  actions: {
    async retrieveDataFromAPI() {
      const { $api } = useNuxtApp();
      const response = await $api.get("p/biz-cards/lemonadestand/?format=json");
      this.data = response.data.data;
    },
    async retrieveActivityFeedData() {
      const token = "957f3a8389335b74ca9b5676c525b2f3eb738b59";
      const headers = {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const response = await axios.get(
          "https://demo-api.bizly.net/api/activity-feed/",
          { headers }
        );
        this.feedData = response.data.data.map((item) => {
          const {
            owner,
            content_type,
            image_kit_id,
            post_content,
            description,
            title,
          } = item;
          const data = {
            ...owner,
            ...(content_type === "image" && {
              image_type_value: image_kit_id,
              description,
              title,
            }),
            ...(content_type === "text" && {
              text_type_value: post_content,
              description,
              title,
            }),
            ...(content_type === "link" && {
              link_type_value: image_kit_id,
              description,
              title,
            }),
            ...(content_type === "video" && {
              video_type_value: image_kit_id,
              description,
              title,
            }),
          };
          return data;
        });
      } catch (error) {
        // Handle error
      }
    },

    async retrieveInspirationData() {
      const { $api } = useNuxtApp();
      const token = "957f3a8389335b74ca9b5676c525b2f3eb738b59";
      const headers = {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      };
      const response = await $api.get(
        "https://demo-api.bizly.net/api/network/inspiration",
        { headers }
      );
      this.inspirationData = response.data.data;
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
