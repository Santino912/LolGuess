import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("strictQuery", true);
try {
  mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log("Connect DB ok");
} catch (err) {
  console.log("Connect DB error", err);
}
