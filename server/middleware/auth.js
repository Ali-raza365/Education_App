const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

const auth = catchAsyncErrors(async (req, res, next) => {
  try {
  const token = !!req?.headers["authorization"] ? req?.headers["authorization"].split(' ')[1] : null
  if (!token) next(new ErrorHandler("Invalid Authentication", 401));

    const jwttoken = token.replace('Bearer ', '');
    jwt.verify(jwttoken, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) next(new ErrorHandler("Invalid  Token please login again", 400));
      req.user = user;
      next();
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });
};

module.exports = {
  auth,
  generateAccessToken,
};
