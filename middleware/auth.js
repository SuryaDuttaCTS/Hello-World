const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get the token from the header
  const token = req.header("x-auth-token");
  //check fi does nto exist
  if (!token) {
    return res.status(401).json({ msg: "No token, Authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ msg: " token not valid, Authorization denied" });
  }
};
