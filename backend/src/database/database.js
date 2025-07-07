const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfuly");
  } catch (error) {
    console.error("Error connecting to Database", error);
    process.exit(1);
  }
};
