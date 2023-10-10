import { Router } from "express";
import getChamp from "../Controllers/getChamp.js";
import getAllChamps from "../Controllers/getAllChamps.js";

const router = Router();

router.get("/champ", getChamp);
router.get("/allchamps", getAllChamps);

export default router;
