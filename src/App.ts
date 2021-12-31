import express from 'express';
import dotenv from 'dotenv';
import connect from './utils/db_connection';
import logger from './utils/logger';
import routes from './routes/app.routes';
import userAuth from './middleware/user.middleware';
import api_ruleset from './utils/api_rules';
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api_ruleset);

app.listen(port, async () => {
  logger.info(`App running on: http://localhost:${port}`);

  // Attempt a connection to Mongo Atlas
  await connect();
});

// Routes & Middleware
app.use('/', routes);
app.use('/users', userAuth, routes);