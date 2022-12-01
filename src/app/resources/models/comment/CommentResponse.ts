import { UserPerComment } from "./UserPerComment";

export class CommentModel{
  id!: number;
  comment!: string;
  likes!: number;
  user!: UserPerComment;
}
