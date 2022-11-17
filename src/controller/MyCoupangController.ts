import { Request, Response } from "express";
import { myCoupangService } from "../service";

//* 마이 쿠팡 유저 정보 조회
const getMyCoupangUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ status: 400, message: "유저 정보 조회 실패" })
    }

    const getMyCoupangUser = await myCoupangService.getMyCoupangUser(+userId);
    return res.status(200).json({ status: 200, message: "유저 조회 성공", getMyCoupangUser })
}


const myCoupangController = {
    getMyCoupangUser,
};

export default myCoupangController;