const flowService = require("../services/flow.service");

const flowController = {
  async createFlowRequest(req, res, next) {
    try {
      const result = await flowService.saveFlowRequest(req.body);
      return res.status(201).json({
        success: true,
        message: "Record saved successfully.",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = flowController;
