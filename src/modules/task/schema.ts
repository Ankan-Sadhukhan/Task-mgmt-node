import mongoose, { Schema } from 'mongoose';
import { ITask } from './model';

const taskSchema: Schema = new Schema(
  {
    title: { type: String, required: false, trim: true, },
    description: { type: String, required: true, trim: true },
    assignedUser: { type: String, required: true,default: null, trim: true },
    dueDate: { type: Date, required:true},
    completed: { type: String, required:false,trim: true }
  },
  {
    timestamps: true,
  },
);

// Export the model and return your IUser interface
export default mongoose.model<ITask>('task', taskSchema, 'tasks');
