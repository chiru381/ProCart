const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  var secret_key = "abcd123";
  return jwt.sign(
    {
      _id: user._id,
    },
    secret_key,
    {
      expiresIn: "30d",
    }
  );
};
module.exports = generateToken;
