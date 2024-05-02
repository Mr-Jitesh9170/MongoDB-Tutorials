const express = require("express")
const app = express();
const { main } = require("./db/db.js")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// database connected >
main();


// routes =>
app.use(require("./timeStamp/timestamp.js"))

// server listning on =>
app.listen(8080, () => {
    console.log("server connected  --> 8080")
})