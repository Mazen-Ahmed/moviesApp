import axios from "axios";
import { baseURL, APIKey } from "./apiConfig";

export const axiosBase = axios.create({
  baseURL,
  params: {
    api_key: APIKey,
  },
  timeout: 30000,
});
