import { Document, Types } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  assignedUser: string;
  dueDate: Date;
  completed: boolean;

}

export interface ICreateTaskRequest {
  title: string;
  description: string;
  assignedUser: string;
  dueDate: Date;
  completed: boolean;
}

export interface ITaskRequestObject {
  title: string;
  description: string;
  assignedUser: string;
  dueDate: Date;
  _id: Types.ObjectId;
}
