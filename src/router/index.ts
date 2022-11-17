import { Router } from "express";
import myCoupangRouter from "./MyCoupangRouter";
import homeRouter from "./homeRouter";

const router: Router = Router();

router.use("/mycoupang", myCoupangRouter);
router.use("/home", homeRouter);

export default router;
