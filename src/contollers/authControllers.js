const { createUserServices, getJWTServices, validateJWTServices } = require('../services/authServices');

let jwtToken;

const createUserControllers = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await createUserServices(username, password);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

const getJWTControllers = async (req, res) => {
  try {
    const { username, password } = req.body;
    jwtToken = await getJWTServices(username, password);
    res.send(jwtToken);
  } catch (err) {
    res.status(400).json({
      status: 'fail jwttoken',
      message: err,
    });
  }
};

const validateJWTControllers = (req, res) => {
  try {
    const { jwt } = req.body;
    validateJWTServices(jwt);
    res.status(200).send('Token is valid');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = {
  createUserControllers, getJWTControllers, validateJWTControllers,
};
