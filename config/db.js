// db.js

const mongoose = require("mongoose");
const db =
  "mongodb+srv://ghrabik_db_user:9WKzd2rSouZZSCGt@cluster0.xxbl5bj.mongodb.net/?appName=Cluster0";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;