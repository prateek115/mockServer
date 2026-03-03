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

  async getivrqueuedata(req, res, next) {
    try {
      const inboundNumber = req.query.inboundnumber;
      const service = req.query.service;

      if (!inboundNumber || !service) {
        return res.status(400).json({ error: 'Missing parameters' });
      }

      const result = await flowService.getivrqueuedata(inboundNumber,service);
      res.json(result);
    
    } catch (err) {
      res.status(500).json({ error: err.message });
      next(err);
    }
  },

};

module.exports = flowController;
