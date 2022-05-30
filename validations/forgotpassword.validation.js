const Joi = require("joi");

module.exports.validateforgot = function (forgotPassword) {
  const schema = Joi.object({
    email: Joi.string(),
  });

  return schema.validate(forgotPassword);
};
