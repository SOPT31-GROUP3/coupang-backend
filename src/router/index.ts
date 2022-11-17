import { Router } from "express";
import myCoupangRouter from "./MyCoupangRouter"

const router: Router = Router();

router.use("/mycoupang", myCoupangRouter);

export default router;