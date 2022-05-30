const Joi = require("joi");

module.exports.validate = function (User) {
  const schema = Joi.object({
    user_id: Joi.string().max(1),
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    phone_number: Joi.string(),
    status: Joi.string().valid("active", "inactive"),
  }).unknown();

  return schema.validate(User);
};
