import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";
import { type Model, model, Schema } from "mongoose";

export type TodoDocument = mongoose.Document & {
  name: string;
  description: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const todoSchema = new Schema<TodoDocument>({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: { immutable: true, type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
});


export const Todo = mongoose.model<TodoDocument>('Todo', todoSchema);
export const TodoTC = composeWithMongoose(Todo);
