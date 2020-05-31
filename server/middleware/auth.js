const dotenv = require("dotenv").load();
const jwt = require("jsonwebtoken");

//make sure the user is logged in - Authentication
exports.loginRequired = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1] // Bearer dsjklfhadf
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Please log in first!"
        })
      }
    })
  } catch (err) {
    return next({
      status: 401,
      message: "Please log in first!"
    })
  }
};

//makse sure we got the correct user - Authorization
exports.ensureCorrectUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({
          status: 401,
          message: "You are not authorized to do that!"
        })
      }
    })
  } catch (err) {
    return next({
      status: 401,
      message: "You are not authorized to do that!"
    })
  }
}