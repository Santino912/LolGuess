import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server Started in ${PORT}`);
});
