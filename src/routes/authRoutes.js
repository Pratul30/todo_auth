const express = require('express');

const authRouter = express.Router();

const {
  createUserControllers,
  getJWTControllers,
  validateJWTControllers,
} = require('../contollers/authControllers');

authRouter.route('/user').post(createUserControllers);
authRouter.route('/login').post(getJWTControllers);
authRouter.route('/token/validate').get(validateJWTControllers);

module.exports = authRouter;
