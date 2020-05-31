const db = require("../models/index.js");
const jwt = require("jsonwebtoken");

exports.login = async function (req, res, next) {
  try {
    //finding a user
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { id, username, profileImageUrl } = user;
    //check if their password matches the saved one
    let isMatch = await user.comparePassword(req.body.password);
    //if it all matches
    if (isMatch) {
      let token = jwt.sign({
        id,
        username,
        profileImageUrl
      },
        process.env.SECRET_KEY
      );
      //log them in
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
      })
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password!"
      })
    }
  } catch (err) {
    return next({
      status: 400,
      message: "Invalid Email/Password!"
    })
  }


}

exports.signup = async function (req, res, next) {
  try {
    //create a user
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign({
      id,
      username,
      profileImageUrl
    }, process.env.SECRET_KEY);
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    })
    //create a token (signing a token)
    //process.env.SECRET_KEY
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken!";
    }
    //otherwise just send back a generic 400
    return next({
      status: 400,
      message: err.message
    })

  }
}