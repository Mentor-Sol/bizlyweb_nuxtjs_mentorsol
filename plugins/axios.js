import axios from "axios";
import { API_BASE_URL } from "../constants";

export default defineNuxtPlugin(() => {
  let api = axios.create({
    baseURL: API_BASE_URL,
  });
  return {
    provide: {
      api: api,
    },
  };
});
