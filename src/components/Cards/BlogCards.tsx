import React from "react";
import { Blog } from "../../types/blogs";

interface BlogCardProps {
  Blogs: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ Blogs }) => {
  console.log(Blogs, "blogs in card");
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-[30rem] "
        src={
          "https://micca-blog-template.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fnextjs23%2Fmicca%2Fali-karimiboroujeni-4SjDZfWP3ns-unsplash.jpg&w=450&q=75"
        }
        // alt={Blogs.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Blogs.title}</div>
        <p className="text-gray-700 text-base">{Blogs.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {Blogs.tag}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {Blogs.reading_time} min read
        </span>
      </div>
    </div>

    // <div className="flex">
    //   <div className="flex flex-wrap xl:flex-nowrap gap-10">
    //     <a href="" className="xl:[flex-basis:65%]  shrink-0">
    //       <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5">
    //         <img
    //           src="https://micca-blog-template.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fnextjs23%2Fmicca%2Fali-karimiboroujeni-4SjDZfWP3ns-unsplash.jpg&w=828&q=75"
    //           alt="Post thumbnail"
    //           sizes="(max-width: 1279px) 95vw, 950px"
    //           className="absolute h-full w-full inset-0 object-cover text-transparent"
    //           decoding="async"
    //           loading="lazy"
    //         />
    //       </div>
    //       <div className="flex flex-wrap gap-3 items-center mt-6">
    //         <div className="flex flex-wrap gap-3">
    //           <a
    //             className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white  tracking-wide whitespace-nowrap"
    //             href="/"
    //           >
    //             {Blogs.tag}
    //           </a>
    //         </div>
    //         <div className="text-sm data-color flex items-center ">
    //           <span className="whitespace-nowrap ">Oct 28, 2022</span>
    //           <span className="px-2.5">⋅</span>
    //           <span className="whitespace-nowrap">
    //             {Blogs.reading_time} min read
    //           </span>
    //         </div>
    //       </div>
    //       <h2 className="text-2xl font-bold mt-4 leading-snug">
    //         <a href="/blog/the-chief-enemy-of-creativity-is-good-sense">
    //           {Blogs.title}
    //         </a>
    //       </h2>
    //       <p className="mt-4">{Blogs.description}</p>
    //       <div className="flex gap-2 items-center mt-6">
    //         <div className="flex">
    //           <a
    //             className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 "
    //             href="/author/main"
    //           >
    //             <div
    //               className="rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 inline-block leading-[0] !border-2"
    //               style={{ width: "30px", height: "30px" }}
    //             >
    //               <div className="pt-[100%] relative">
    //                 <img
    //                   alt="author avatar"
    //                   sizes="30px"
    //                   src="https://micca-blog-template.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fnextjs23%2Fmicca%2Favatars%2Fian-dooley-d1UPkiFd04A-unsplash.jpg&w=32&q=75"
    //                   decoding="async"
    //                   data-nimg="fill"
    //                   loading="lazy"
    //                   style={{
    //                     position: "absolute",
    //                     height: "100%",
    //                     width: "100%",
    //                     inset: "0px",
    //                     objectFit: "cover",
    //                     color: "transparent",
    //                   }}
    //                 />
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //         <div>
    //           <a
    //             className="text-sm font-medium heading-color"
    //             href="/author/main"
    //           >
    //             {Blogs.author}
    //           </a>
    //         </div>
    //       </div>
    //     </a>
    //   </div>
    // </div>
  );
};
