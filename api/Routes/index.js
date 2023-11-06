import { Router } from "express";
import getAllChamps from "../Controllers/getAllChamps.js";
import getChampWithNickname from "../Controllers/getChampWithNickname.js";
import getChampSplashart from "../Controllers/getChampSplashArt.js";

const router = Router();

router.get("/allchamps", getAllChamps);
router.get("/allchampssplashart", getChampSplashart);
router.get("/allchampsnickname", getChampWithNickname);

export default router;
