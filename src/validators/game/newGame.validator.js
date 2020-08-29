const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().trim().min(3).max(128).required(),
  description: Joi.string().trim().required(),
  rating: Joi.number().integer().min(0).max(127).required(),
});
