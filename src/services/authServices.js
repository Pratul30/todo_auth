const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../../database/models');

const createUserServices = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await Users.create({
    username,
    password: hashedPassword,
  });
  return user;
};

const getJWTServices = async (username, password) => {
  const user = await Users.findOne({
    where: {
      username,
    },
  });
  const dbPassword = user.password;
  const result = await bcrypt.compare(password, dbPassword);
  if (result) {
    const jwtToken = jwt.sign(username, process.env.TOKEN_SECRET);
    return jwtToken;
  }
  return false;
};

const validateJWTServices = (token) => jwt.verify(token, process.env.TOKEN_SECRET);

module.exports = {
  createUserServices,
  getJWTServices,
  validateJWTServices,
};
