import { Document } from 'mongoose';
export class Email extends Document {
  name: string;
  email: string;
  message: string;
}
