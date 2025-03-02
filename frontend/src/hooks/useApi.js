import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: process.env.API_BASE_URL,
  });

  return api;
};

export default useApi;