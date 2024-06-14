export interface Blog {
  _id: string;
  title: string;
  description: string;
  tag: string;
  author: string;
  state: "published" | "draft";
  user_id: string;
  read_count: number;
  reading_time: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  publishedAt: string | "Not published yet";
}

export interface BlogResponse {
  totalPages: number;
  page: number;
  totalBlogs: number;
  limit: number;
  blogs: Blog[];
  date: Date;
}
