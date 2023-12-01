export interface PostCreate {
  title: string;
  categoryId: string;
  content: string;
}

export interface PostListType {
  postCount: number;
  posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
  nickname: string;
  createdAt: string;
  categoryName: string;
}
