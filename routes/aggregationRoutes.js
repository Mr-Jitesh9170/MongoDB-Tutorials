const { Router } = require("express")
const { AddFields, count, limit, lookup, skip, sort, group, project } = require("../controllers/aggregation/aggregationControllers.js")
const router = Router();

router.get("/aggregation/addFields", AddFields);
router.get("/aggregation/count", count);
router.get("/aggregation/limit", limit);
router.get("/aggregation/lookup", lookup);
router.get("/aggregation/skip", skip);
router.get("/aggregation/sort", sort);
router.get("/aggregation/sort", sort);
router.get("/aggregation/project", project);
router.get("/aggregation/group", group);

module.exports = router;