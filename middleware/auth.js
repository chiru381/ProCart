const jwt = require("jsonwebtoken");

//authentication for jwt
let auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Un Authorized Access - No headers");
  }
  let token = req.headers.authorization.split("")[1];
  console.log(token);

  if (token == null) {
    return res.status(401).send("Un Authorized Access - token null");
  }
  let payload = jwt.verify(token, process.env.SECRETKEY);
  console.log("Auth....", payload.user);

  if (!payload) {
    return res.status(200).json("Un Authorized Access");
  }
  req.user = payload.user;
  next();
};
module.exports = auth;
