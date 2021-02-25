import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }

    const { MONGODB_URI } = process.env;

    await mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true
    });

    return handler(req, res);
};

export default connectDB;