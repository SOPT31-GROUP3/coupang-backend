import { Request, Response } from "express";
import { categoryService } from "../service";
import statuscode from "../module/statusCode";
import message from "../module/responseMessage";

const getCategoryProduct = async (req: Request, res: Response) => {
    const page = req.query.page;
    const limit = req.query.limit;
    try {
        if (!page || !limit) {
            return res.status(statuscode.BAD_REQUEST).json({ status: statuscode.BAD_REQUEST, message: message.NOT_FOUND })
        }
        const getCategoryProduct = await categoryService.getCategoryProduct(+page, +limit);
        return res.status(statuscode.OK).json({ status: statuscode.OK, message: message.GET_CATEGORY_PRODUCT_SUCCESS, data: { categoryProductList: getCategoryProduct } });
    } catch (err) {
        return res.status(statuscode.INTERNAL_SERVER_ERROR).json({ status: statuscode.BAD_REQUEST, message: message.INTERNAL_SERVER_ERROR });
    }
}

const categoryController = {
    getCategoryProduct,
}

export default categoryController;