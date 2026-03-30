import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], 
    required: true
  },
  dob: {
    type: Date,
    required: true
  }
}, {
  timestamps: true 
});

const User = mongoose.model('User', userSchema);
export default User;