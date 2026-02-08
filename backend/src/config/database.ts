import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected successfully ✅');
  } catch (error) {
    console.log('MongoDB connection failed ❌: ', error);
    process.exit(1);
    //status code 1 means failure
    //status code 0 means success
  }
}

export default connectDB;
