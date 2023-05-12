import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "api-data",
  state: () => {
    return {
      data: [],
    };
  },
  actions: {
    async retrieveDataFromAPI() {
      const { $api } = useNuxtApp();
      const response = await $api.get("p/biz-cards/lemonadestand/?format=json");
      this.data = response.data.data;
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
