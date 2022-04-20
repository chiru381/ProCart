const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TokenSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // expires: 3600,
    },
})

let Token = mongoose.model('Token', TokenSchema)
module.exports = Token;