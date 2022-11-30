import { UserPerPost } from "./userPerPost";

export class Publication {
  dateTime !: Date;
  id!: any;
  likes!: any;
  text!: string;
  user!: UserPerPost;
}
