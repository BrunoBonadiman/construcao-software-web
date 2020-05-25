import { User } from 'src/app/shared/user.model';


export class Message {
  content: string;
  messageId: string;
  username?: User;
  userId?: string;
  createdAt: string;
  updatedAt: string;

  constructor(
    content: string,
    messageId: string,
    username?: User,
    userId?: string,
    createdAt?: string,
    updatedAt?: string,
  ) {
    this.content = content;
    this.messageId = messageId;
    this.username = username;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
