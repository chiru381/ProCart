const Joi = require("joi");

module.exports.validatereset = function (resetPassword) {
  const schema = Joi.object({
    password: Joi.string(),
  });

  return schema.validate(resetPassword);
};
