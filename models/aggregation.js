let { Schema, model } = require("mongoose");

// schema =>
const aggregateSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        name: String,
        size: String,
        price: Number,
        quantity: Number,
        date: Date
    }
) 
// model =>
module.exports = model("Aggregate", aggregateSchema, "Aggregate");