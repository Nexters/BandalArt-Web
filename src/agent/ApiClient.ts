import axios from 'axios';

export const initApiClient = () => {
  axios.defaults.baseURL = process.env.API_BASE_URL;
};

export const apiClient = () => {
  return {
    get: <Params>(url: string, params?: Params) => axios.get(url, { params }),
    post: <Body>(url: string, data: Body) => axios.post(url, data),
    put: <Body>(url: string, data: Body) => axios.put(url, data),
    delete: (url: string) => axios.delete(url),
  };
};
