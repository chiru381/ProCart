const Joi = require("joi");

//unknown means in frontend extra fields added no error
module.exports.validate = function (User) {
  const schema = Joi.object({
    user_id: Joi.string(),
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string().min(3).max(15).required(),
    // password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }),
    phone_number: Joi.string(),
    status: Joi.string().valid("active", "inactive"),
  }).unknown();

  return schema.validate(User);
};
