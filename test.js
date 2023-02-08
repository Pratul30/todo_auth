const bcrypt = require('bcrypt');

const password = 'abc123';

const hash = async () => {
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
};

hash();
