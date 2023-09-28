import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import "./database/index.js";

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server Started in ${PORT}`);
});
