const { body } = require("express-validator");

const registrationValidator = [
  body("username", "Enter correct username").isLength({ min: 3, max: 32 }),
  body("email", "Enter correct email").isEmail(),
  body("password", "Enter correct password").isLength({ min: 5, max: 32 }),
];

const loginValidator = [
  body("email", "Enter correct email").isEmail(),
  body("password", "Enter correct password").isLength({ min: 5, max: 32 }),
];

module.exports = { loginValidator, registrationValidator };