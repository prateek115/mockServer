const { Router } = require("express");
const flowController = require("../controllers/flow.controller");
const { validate } = require("../middlewares/validate");
const { flowRequestSchema } = require("../utils/validators/flow.validator");

const router = Router();

// POST /api/flow/request
router.post("/request", validate(flowRequestSchema), flowController.createFlowRequest);

// ── Add more flow routes here ─────────────────────────────────────────────────
// router.get("/request/:id", flowController.getFlowRequest);
// router.get("/request",     flowController.getAllFlowRequests);

module.exports = router;
