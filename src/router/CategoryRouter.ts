import { Router } from 'express';
import { categoryController } from "../controller";

const router: Router = Router();

//* 카테고리 데이터 조회 - GET category (pagination)
router.get("/", categoryController.getCategoryProduct);

export default router;