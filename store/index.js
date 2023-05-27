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
        this.feedData = response.data.data;
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
