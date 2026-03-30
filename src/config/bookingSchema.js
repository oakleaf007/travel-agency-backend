import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
  bookingDate: {
    type: Date,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  persons: {
    type: Number,
    required: true
  },
  places: {
    type: String,
    required: true
  },
  notification: {
    type: Boolean,
    default: false
  }
  
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);