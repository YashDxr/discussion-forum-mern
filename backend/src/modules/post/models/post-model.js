import mongoose, { Schema, SchemaTypes } from "mongoose";
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: SchemaTypes.ObjectId, ref: "User" },
    slug: { type: SchemaTypes.String, required: true },
  },
  { timestamps: true }
);
export const PostModel = mongoose.model("Post", postSchema);
