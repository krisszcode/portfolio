import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    default: 'default-avatar.png'
  },
  online: {
    type: Boolean,
    default: false
  },
});

export const User = mongoose.model('User', userSchema);
