import mongoose from 'mongoose';
import logger from './logger';

const connect = async () => {

    const mongoURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(mongoURI);
        logger.info("Database connection established.");
    } catch (error) {
        logger.error("The database connection failed because: " + error);
        process.exit(1);
    }
}

export default connect;