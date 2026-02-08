import mongoose from 'mongoose';

async function connectDB() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI enviornment variable is not defined');
    }
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully ✅');
  } catch (error) {
    console.log('MongoDB connection failed ❌: ', error);
    process.exit(1);
    //status code 1 means failure
    //status code 0 means success
  }
}

export default connectDB;
