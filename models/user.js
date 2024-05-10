const { Schema, model } = require("mongoose")

// user schema =>
const userSchema = new Schema(
    {
        name: String,
        educations: String,
        mobile: {
            type: Number,
            unique: [true, "insert unique number"]
        }
    },
    {
        timestamps: true 
    }
)

module.exports = model("User", userSchema, "User");