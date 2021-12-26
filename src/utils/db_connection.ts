import mongoose from 'mongoose';
import logger from './logger';

const connect = async () => {

    const mongoURI = process.env.MONGO_URI;

    return mongoose
        .connect(mongoURI)
        .then(() => {
            logger.info("Database connection established.");
        })
        .catch((err) => {
            logger.error("The database connection failed because: " + err);
            process.exit(1);
        });
}

export default connect;