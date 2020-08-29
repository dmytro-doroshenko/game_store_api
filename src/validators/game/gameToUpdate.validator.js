const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().trim().min(3).max(128).optional(),
  description: Joi.string().trim().optional(),
  rating: Joi.number().integer().min(0).max(127).optional(),
});
