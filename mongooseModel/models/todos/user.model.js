import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  // agar ap is main object call karte hain to ap mongoose ki superPower Call karte hain

  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true, // extra spaces remove
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 10, // example validation
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
