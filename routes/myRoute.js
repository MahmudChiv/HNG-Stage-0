import { controller } from "../controllers/controller.js";
import { Router } from "express";
const router = Router();

router.get("/", controller);

export default router;
