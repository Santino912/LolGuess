import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getChampWithNickname from "./Controllers/getChampWithNickname.js";
import getChampSplashart from "./Controllers/getChampSplashArt.js";
import getAllChamps from "./Controllers/getAllChamps.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/allchamps", getAllChamps);
app.get("/allchampssplashart", getChampSplashart);
app.get("/allchampsnickname", getChampWithNickname);

app.listen(PORT, () => {
  console.log(`Server Started in ${PORT}`);
});
