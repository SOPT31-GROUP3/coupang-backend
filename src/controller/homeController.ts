import { Request, Response } from "express";
import statusCode from "../module/statusCode";
import { homeService } from "../service";
import message from "../module/responseMessage";

//* 오늘의 상품 조희
const getTodayProduct = async (req: Request, res: Response) => {
    const data = await homeService.getTodayProduct();

    return res.status(statusCode.OK).json({ status: statusCode.OK, success: true, message: message.GET_TODAY_PRODUCT_SUCCESS, data: { todayProductList: data } });
};

//* 베스트 상품 조회
const getBestProduct = async (req: Request, res: Response) => {
    const data = await homeService.getBestProduct();

    return res.status(statusCode.OK).json({ status: statusCode.OK, success: true, message: message.GET_BEST_PRODUCT_SUCCESS, data: { bestProductList: data } });
};

const homeController = {
    getTodayProduct,
    getBestProduct,
};

export default homeController;
