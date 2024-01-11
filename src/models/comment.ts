export interface Comment {
  id: number;
  username: string;
  comment: string;
  createdAt: string;
}

export interface CreateCommentValue {
  pid: number;
  username: string;
  password: string;
  comment: string;
}
