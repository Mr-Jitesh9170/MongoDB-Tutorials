const { Router } = require("express")
const { creatingTimeStamps, updatingTimeStamps } = require("../controllers/timeStamp/timestampControllers.js")
const router = Router();

router.post("/timestamp", creatingTimeStamps)
router.put("/timestamp", updatingTimeStamps)

module.exports = router;