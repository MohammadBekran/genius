import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL,
});

const onSuccess = (response: { data: Array }) => {
  return response.data;
};

const onError = (err: { response: { status: number } }) => {
  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client Error: ", err.response.status);
  }

  Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;