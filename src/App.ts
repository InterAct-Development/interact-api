import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import connect from './utils/db_connection';
import logger from './utils/logger';
import routes from './routes/app.routes';
import validateJWT from './middleware/user.middleware';
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
app.use('/users', routes);

// Protected route to test JWT validation middleware
app.use('/test', validateJWT, (req: Request, res: Response) => {
  return res.json({ message: "Authorized"});
});