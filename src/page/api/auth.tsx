/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from "../../utils/request"; // Ensure this utility is correctly implemented
import { SignUpValuestypes, SigninResponse } from "../../types/auth";
import { AxiosResponse } from "axios";

const user_auth = import.meta.env.VITE_USER_URL;

export const LogInAPI = async (body: any) => {
  const response: AxiosResponse<SigninResponse> = await request({
    url: `${user_auth}/login`,
    method: "POST",
    body,
  });
  return response;
};

export const RegisterAPI = async (body: any) => {
  const response: AxiosResponse<SignUpValuestypes> = await request({
    url: `${user_auth}/signup`,
    method: "POST",
    body,
  });

  return response;
};
