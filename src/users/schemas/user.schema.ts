import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  firstName: { type: String },
  lastName: { type: String },
});
