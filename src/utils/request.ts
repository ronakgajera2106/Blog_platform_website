/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, ResponseType } from "axios";

export const request = async ({
  url,
  method = "GET",
  params,
  body,
  headers,
  responseType,
}: {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: any;
  body?: any;
  headers?: any;
  responseType?: ResponseType;
}) => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const res: AxiosResponse = await axios.request({
    url: BASE_URL + url,
    method,
    params,
    data: body,
    headers,
    responseType,
  });

  return res;
};
