import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${conn.connection.host}`.bgCyan.green);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgBlue.red);
    }
}

export default connectDB; 