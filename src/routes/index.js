const { Router } = require("express");
const flowRoutes = require("./flow.routes");
// ── Register new route modules here ──────────────────────────────────────────
// const userRoutes = require("./user.routes");

const router = Router();

router.use("/flow", flowRoutes);
// router.use("/users", userRoutes);

module.exports = router;
