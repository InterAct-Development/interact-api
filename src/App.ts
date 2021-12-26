import express from 'express';
import connect from './utils/db_connection';
import logger from './utils/logger';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
dotenv.config();

app.get('/', (req, res) => res.send('TS Express Server'));

app.listen(port, async () => {
  logger.info(`App running on: http://localhost:${port}`);

  // Attempt a connection to MongoDB
  await connect();
});