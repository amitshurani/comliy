const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status("401").send("access denide no token provied"); //401 = no token exist
  try {
    const decoded = jwt.verify(token, "thisString");
    req.user = decoded;
    next(); //! next = continue to the next middelwere
  } catch (error) {
    res.status(400).send("invalid token");
  }
};