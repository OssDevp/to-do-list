import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL);

        const { host, port } = db.connection;
        const url = `${host}:${port}`;
        console.log(`MongoDB connected at: ${url}`);
    } catch (error) {
        console.log(`Error: ${error.massage}`);
        process.exit(1);
    }
}
export default connectDB;