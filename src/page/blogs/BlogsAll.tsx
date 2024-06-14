import React, { useState } from "react";
import { BlogCard } from "../../components/Cards/BlogCards";
import { GetAllBlogs } from "../api/blogapi";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Blog, BlogResponse } from "../../types/blogs";

const BlogsAll = () => {
  const [blogs, setblogs] = useState();

  const { error, isLoading } = useQuery<
    AxiosResponse<BlogResponse>,
    Error | null
  >(["GetAllBlogs"], GetAllBlogs, {
    onSuccess: (data) => {
      console.log(data.data.blogs, "DATAAAA");
      setblogs(data?.data?.blogs);
    },
    onError: (err) => {
      console.log(err, "ERRORR");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching blogs: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <div>
        <h1 className="text-4xl sm:text-5xl  text-center">Style guide</h1>
        <br />
        <p className="text-center ">
          Praesent ullamcorper tellus nec tincidunt volutpat. Vivamus tempor
          egestas justo eu lobortis. Etiam malesuada eleifend urna vel pretium.
          Etiam eu lorem vulputate, egestas ante pharetra, facilisis lectus.
          Integer tortor lectus, lacinia non vulputate ut, dignissim a felis.
          Sed purus lectus, ultricies et urna sit amet, maximus cursus ipsum.
          Vivamus ut luctus urna, ut efficitur sapien. Vivamus erat nibh,
          iaculis et imperdiet in, luctus vitae felis
        </p>
      </div>
      <br />
      <div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 lg:px-16 ">
          {blogs?.map((data: Blog) => {
            console.log(data, "DATAAA");
            return (
              <>
                <BlogCard Blogs={data} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsAll;
