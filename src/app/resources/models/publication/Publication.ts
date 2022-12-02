import { UserPerPost } from "./UserPerPost";

export class Publication {
  dateTime !: Date;
  id!: any;
  likes!: any;
  text!: string;
  user!: UserPerPost;
}
