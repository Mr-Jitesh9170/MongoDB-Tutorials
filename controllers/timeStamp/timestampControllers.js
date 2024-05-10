const userModel = require("../../models/user.js");
/*  
    #TimeStamps => timestaps is the combination of the ( createdAt and updatedAt ) date during the data is inserted inside to database.
        
       1- during the schema creations for the data you can define timstamps as true 
       2- once createdAt date created in database then it can not be changed.
       3- only updatedAt date will be updated if the data updated inside to the database.
*/

// inserting and creating time stamps =>
exports.creatingTimeStamps = async (req, res) => {
    try {
        let { name, educations, mobile } = req.body;
        let respUser = await userModel.create({ name, educations, mobile });
        res.json(
            {
                status: 200,
                massage: "data inserted",
                results: respUser
            }
        )
    } catch (error) {
        console.log(error, " <---- error")
        res.json(
            {
                status: 500,
                massage: "internal server error"
            }
        )
    }
}

// updating time stamps =>
exports.updatingTimeStamps = async (req, res) => {
    try {
        let { _id, name, educations } = req.body;
        let respUser = await userModel.findByIdAndUpdate(_id, { name, educations }, { new: true });
        res.json(
            {
                status: 200,
                massage: "data updated",
                results: respUser
            }
        )
    } catch (error) {
        console.log(error, " <---- error")
        res.json(
            {
                status: 500,
                massage: "internal server error"
            }
        )
    }
}

 