const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    image: { type: String, required: true }, 
    place: { type: String, required: true },
    price: { type: Number, required: true },
    days: { type: Number, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Destination', placeSchema);