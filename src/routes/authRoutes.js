const express = require('express');

const authRouter = express.Router();

const {
  createUserControllers,
  getJWTControllers,
  validateJWTControllers,
} = require('../contollers/authControllers');

const {
  authenticateToken,
} = require('../middlewares/authenticateToken');

authRouter.route('/user').post(createUserControllers);
authRouter.route('/login').post(getJWTControllers);
authRouter.route('/token/validate').get(authenticateToken, validateJWTControllers);

module.exports = authRouter;
