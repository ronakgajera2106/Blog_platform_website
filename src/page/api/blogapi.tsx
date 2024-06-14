import { request } from "../../utils/request"; // Ensure this utility is correctly implemented
import { AxiosResponse } from "axios";
import { BlogResponse } from "../../types/blogs";

export const GetAllBlogs = async (body: any) => {
  const response: AxiosResponse<BlogResponse, any> = await request({
    url: `/blog/allblogs`,
    method: "GET",
    body,
  });
  return response;
};
