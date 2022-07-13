const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    cityId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stateId: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['active','inactive','deleted'],
        default: 'active'
    }
}, {
    timestamps: true,
});

const City = mongoose.model('City', citySchema);
module.exports = City;
