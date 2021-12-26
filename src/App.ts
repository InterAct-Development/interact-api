import express from 'express';
import dotenv from 'dotenv';

import connect from './utils/db_connection';
import logger from './utils/logger';
import users from './routes/user.routes';
import root from './routes/root.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
dotenv.config();

app.listen(port, async () => {
  logger.info(`App running on: http://localhost:${port}`);

  // Attempt a connection to Mongo Atlas
  await connect();
});

// Routes
app.get('/', root);
app.get('/users', users);