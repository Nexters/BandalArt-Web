import axios, { AxiosResponse } from 'axios';

export const initApiClient = () => {
  axios.defaults.baseURL = process.env.API_BASE_URL;
};

export const apiClient = () => {
  return {
    get: <Params, T>(
      url: string,
      params?: Params,
    ): Promise<AxiosResponse<T> & { statusCode: number }> =>
      axios.get(url, { params }),
    post: <Body>(url: string, data: Body) => axios.post(url, data),
    put: <Body>(url: string, data: Body) => axios.put(url, data),
    delete: (url: string) => axios.delete(url),
  };
};
