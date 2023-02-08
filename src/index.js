const express = require('express');

const app = express();
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoutes');

dotenv.config();

app.use(express.json());
app.use('/', authRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
