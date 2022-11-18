import { Router } from "express";
import myCoupangRouter from "./MyCoupangRouter";
import homeRouter from "./homeRouter";
import categoryRouter from "./CategoryRouter"

const router: Router = Router();

router.use("/mycoupang", myCoupangRouter);
router.use("/home", homeRouter);
router.use("/category", categoryRouter);

export default router;
