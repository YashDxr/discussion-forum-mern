// SCHEMA STRUCTURE OF USER

import mongoose, { Schema, SchemaTypes } from "mongoose";

const userSchema = new Schema({
  email: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: { type: SchemaTypes.String, minLength: 8, required: true },
  name: { type: SchemaTypes.String },
  status: { type: SchemaTypes.String, default: "A" },
  created: { type: SchemaTypes.String, default: new Date() },
});

export const UserModel = mongoose.model("users", userSchema);
