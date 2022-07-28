// adding connection code here

import mongoose from "mongoose";

const DB_CONNECTION_URL = "mongodb://localhost:27017/test-abhi-db";

const connectDB = () => {
  mongoose.connect(DB_CONNECTION_URL, {});
};
