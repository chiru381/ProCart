const mongoose = require("mongoose");

let PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    feature: {
        type: Array,
        default: [],
        // required: true,    
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
    },
    type: {
        type: String,
        enum: ['free','paid'],
        default: 'free',
        required: true
    },
    sortOrder: {
        type: Number,
        // required: true
    },
    status: {
        type: String,
        enum: ['active','inactive','deleted'],
        default: 'active'
    },
   isWeb:{
    type:String
   },
   discount:{
    type:Number
   }
}, {
    timestamps: true,
});
let Plan = mongoose.model("plan", PlanSchema);
module.exports = Plan;
