const Joi = require("joi");

const flowRequestSchema = Joi.object({
  bflowid:        Joi.string().required(),
  service:        Joi.string().required(),
  inbound_number: Joi.string().required(),
  projectname:    Joi.string().required(),
  skillname:      Joi.string().required(),
}).unknown(true); // allow extra fields — they'll be stored in raw_payload

module.exports = { flowRequestSchema };
