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
    const authHeader = req.headers.authorization;
    const token = authHeader;
    if (token == null) return res.sendStatus(401);
    const verified = validateJWTServices(token);
    if (verified) {
      return res.status(200).send('Token is valid');
    }
    return res.status(400).send('Token is not valid');
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = {
  createUserControllers, getJWTControllers, validateJWTControllers,
};
