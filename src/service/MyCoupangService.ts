import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* 마이 쿠팡 유저 정보 조회
const getMyCoupangUser = async (userId: number) => {
    const data = await prisma.user.findUnique({
        where: {
            userId: userId,
        },
    });

    return data;
}

const myCoupangService = {
    getMyCoupangUser,
}

export default myCoupangService;