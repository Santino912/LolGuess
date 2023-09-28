import { Router } from "express";
import getChamp from "../Controllers/getChamp.js";

const router = Router();

router.get("/champ", getChamp);

export default router;
