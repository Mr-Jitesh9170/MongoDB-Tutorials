const { connect } = require("mongoose")

// database connections =>
exports.main = async () => {
    try {
        await connect("mongodb://127.0.0.1:27017/Mongo-Tutorials");
        console.log("mongodb connected");
    } catch (error) {
        console.log(error, "mongodb not connected");
    }
}