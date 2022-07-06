const Joi = require("joi");

//unknown means in frontend extra fields added no error
module.exports.validate = function (User) {
  const schema = Joi.object({
    user_id: Joi.string(),
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string().min(3).max(15).required(),
    // password: Joi.string().min(8).pattern(
    //   new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$')
    // ).required().messages({
    //   'string.pattern.base': 'must contains atleast 1 Uppercase letter, 1 Lowercase letter, 1 Number and 1 Special Character (#?!@$%^&*-_).'     
    // }),
    // confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
    //   'any:allowOnly': 'Confirm password must be same as password.',
    // }),
    // password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }),
    phone_number: Joi.string(),
    status: Joi.string().valid("active", "inactive"),
  }).unknown();

  return schema.validate(User);
};
