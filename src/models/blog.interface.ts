export interface UpdateBlogInfo {
  blogName: string;
  nickname: string;
  description: string;
  thumbnailUrl: string;
}

export interface Blog {
  id: number;
  blogName: string;
  description: string;
  thumbnailUrl: string;
  name: string;
  email: string;
  nickname: string;
}
