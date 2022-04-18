import axios, { AxiosError } from "axios";

const request = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}`,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);

export { request };
