import { Router } from "express";
import { myCoupangController } from "../controller";

const router: Router = Router();

//* 유저 정보 조회 - GET mycoupang/:userId
router.get("/:userId", myCoupangController.getMyCoupangUser);

export default router;