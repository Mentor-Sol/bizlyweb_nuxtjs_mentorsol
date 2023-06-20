import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "api-data",
  state: () => {
    return {
      data: [],
      feedData: [],
      inspirationData: [],
      dataBizCard: {},
    };
  },
  actions: {
    async retrieveDataFromAPI() {
      const { $api } = useNuxtApp();
      const response = await $api.get("p/biz-cards/lemonadestand/?format=json");
      this.data = response.data.data;
    },
    async retrieveActivityFeedData() {
      const { $api } = useNuxtApp();

      const token = "957f3a8389335b74ca9b5676c525b2f3eb738b59";
      const headers = {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const response = await $api.get("/activity-feed/", { headers });
        this.feedData = response.data.data;
        // old Code
        // .map((item) => {
        //   const {
        //     owner,
        //     content_type,
        //     image_kit_id,
        //     image_kit_ids,
        //     post_content,
        //     description,
        //     title,
        //     thumbnail_image_kit_id,
        //     pronouns,
        //     created_on,
        //     is_gallery,
        //     children
        //   } = item;
        //   const data = {
        //     ...owner,
        //     ...(content_type === "image" && {
        //       image_type_value: image_kit_id,
        //       description,
        //       title,
        //       thumbnail_image_kit_id,
        //       pronouns,
        //       created_on,
        //       is_gallery,
        //       children,
        //       content_type
        //     }),
        //     ...(content_type === "text" && {
        //       text_type_value: post_content,
        //       description,
        //       title,
        //       thumbnail_image_kit_id,
        //       pronouns,
        //       created_on,
        //       is_gallery,
        //       children,
        //       content_type
        //     }),
        //     ...(content_type === "link" && {
        //       link_type_value: image_kit_id,
        //       description,
        //       title,
        //       thumbnail_image_kit_id,
        //       pronouns,
        //       created_on,
        //       is_gallery,
        //       children,
        //       content_type
        //     }),
        //     ...(content_type === "video" && {
        //       video_type_value: image_kit_id,
        //       description,
        //       title,
        //       thumbnail_image_kit_id,
        //       pronouns,
        //       created_on,
        //       is_gallery,
        //       children,
        //       content_type
        //     }),
        //     ...(content_type === "image_gallery" && {
        //       image_gallery_type_value: image_kit_ids,
        //       description,
        //       title,
        //       thumbnail_image_kit_id,
        //       pronouns,
        //       created_on,
        //       is_gallery,
        //       children,
        //       content_type
        //     }),
        //     ...(content_type === "video_gallery" && {
        //       image_gallery_type_value: image_kit_ids,
        //       description,
        //       title,
        //       thumbnail_image_kit_id,
        //       pronouns,
        //       created_on,
        //       is_gallery,
        //       children,
        //       content_type
        //     }),
        //   };
        //   return data;
        // });
        //old code
      } catch (error) {
        console.error(error, " Error from store")
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
      const response = await $api.get("/network/inspiration", { headers });
      this.inspirationData = response.data.data;
    },
    async retrieveBizCardById(id) {
      const { $api } = useNuxtApp();
      const token = "957f3a8389335b74ca9b5676c525b2f3eb738b59";
      const headers = {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      };
      const response = await $api.get(`/internal/p/biz-cards/${id}/`, {
        headers,
      });
      console.log(response.data.data);
      this.dataBizCard = response.data.data;
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
