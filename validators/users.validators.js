const Joi = require("joi");

function validateSignup(user) {
  const schema = {
    firstname: Joi.string().required().min(3).max(50),
    email: Joi.string().required().min(5).max(255).email(),
    password: Joi.string().required().min(5).max(1024),
  };
  return Joi.validate(user, schema);
}

exports.validateSignup = validateSignup;
