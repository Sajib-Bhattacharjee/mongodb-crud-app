const mongoose = require("mongoose");

// Database Connection.
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testingDB");
    console.log("Database is connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
