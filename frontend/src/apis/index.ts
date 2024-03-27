import axios from "axios";
import useAuthLocalStroage from "../stores/useAuthLocalStroage.ts";

const baseURL = "https://j10a705.p.ssafy.io/api";
const client = axios.create({
  baseURL
});
export const get = async<T> (url: string): Promise<T> => {
  const {data} = await client.get<T>(url);
  return data;
}
client.interceptors.request.use(
  (config) => {
    const authStore = useAuthLocalStroage();
    const accessToken = authStore.get();
    config.headers.Authorization = accessToken ?? undefined;
    return config;
  },
(error) => {
    console.error(error);
  return Promise.reject(error);
}
);
export default client;