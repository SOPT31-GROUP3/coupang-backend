import { Request, Response } from "express";
import { myCoupangService } from "../service";
import statuscode from "../module/statusCode";
import message from "../module/responseMessage";

//* 마이 쿠팡 유저 정보 조회
const getMyCoupangUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(statuscode.BAD_REQUEST).json({ status: statuscode.BAD_REQUEST, message: message.NOT_FOUND })
    }

    const getMyCoupangUser = await myCoupangService.getMyCoupangUser(+userId);
    return res.status(statuscode.OK).json({ status: statuscode.OK, message: message.GET_USER_SUCCESS, getMyCoupangUser })
}


const myCoupangController = {
    getMyCoupangUser,
};

export default myCoupangController;