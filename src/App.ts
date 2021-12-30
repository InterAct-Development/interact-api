import express from 'express';
import dotenv from 'dotenv';
import connect from './utils/db_connection';
import logger from './utils/logger';
import root from './routes/root.routes';
import userAuth from './middleware/user.middleware';
import register from './routes/register.routes';
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(port, async () => {
  logger.info(`App running on: http://localhost:${port}`);

  // Attempt a connection to Mongo Atlas
  await connect();
});

// Routes & Middleware
app.use('/', root);
app.use('/users', userAuth, register);