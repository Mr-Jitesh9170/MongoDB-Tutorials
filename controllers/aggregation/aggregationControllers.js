let aggregateModel = require("../../models/aggregation.js");

// (1) $addFields => this operatore will create new fields inside to the aggregate pipeline documents.
exports.AddFields = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $addFields: { totalPrice: { $multiply: ["$price", "$quantity"] } }
                }
            ]
        )
        res.send(data)
    } catch (error) {
        console.log(error, "  <---- error");
    }
}

// (2) $count => this will count the number of document in the collections (Or) on the basis of documents it will counts.
exports.count = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $match: { price: { $gt: 19 } }
                },
                {
                    $count: "totalDocuments"
                }
            ]
        )
        res.send(data)
    } catch (error) {
        console.log(error, "  <---- error");
    }
}

// (3) $limit => this will limit the document to send in the further stage of pipelines.
exports.limit = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $limit: 4
                }
            ]
        )
        res.send(data);
    } catch (error) {
        console.log(error, "  <---- error");
    }
}

// (4) $lookup => joining the two collections.
exports.lookup = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $lookup: {
                        from: "User",
                        localField: "userId",
                        foreignField: "_id",
                        as: "user"
                    }
                }
            ]
        )
        res.send(data);
    } catch (error) {
        console.log(error, "  <---- error");
    }
}

// (5) $skip => Skip the number of documents from collections
exports.skip = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $skip: 3
                }
            ]
        )
        res.send(data);
    } catch (error) {
        console.log(error, "  <---- error");
    }
}

// (6) $sort => shorting documents on the basis of the field value (for string it will short in form of the lexico-graphically)
exports.sort = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $sort: { quantity: -1, price: 1 }
                }
            ]
        )
        res.send(data);
    } catch (error) {
        console.log(error, "  <---- error");
    }
}

// (7) $project => In the pipeline stages , to which documents fields i have to show , on the basis of the 1 means show , -1 not show
exports.project = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $project: { name: 1 }
                }
            ]
        )
        res.send(data);
    } catch (error) {
        console.log(error, "  <---- error");
    }
}

// (8) $group => it make the group of similer documents on the basis of the field value of the document , then we can perform any kind of the operators.
exports.group = async (req, res) => {
    try {
        let data = await aggregateModel.aggregate(
            [
                {
                    $group: {
                        _id: "$name",              // id => this shows many documents has samiler name, on the basis of name uniqueness it will group the documents.
                        total: { $sum: "$price" },
                        similerNames: { $sum: 1 }
                    }
                }
            ]
        )
        res.send(data);
    } catch (error) {
        console.log(error, "  <---- error");
    }
}