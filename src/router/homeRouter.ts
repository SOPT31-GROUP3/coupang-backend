import { Router } from "express";
import { homeController } from "../controller";

const router: Router = Router();

//* 오늘의 상품 조회 - GET api/home/today
router.get('/today', homeController.getTodayProduct);

//* 베스트 상품 조회 - GET api/home/best
router.get('/best', homeController.getBestProduct);

export default router;
