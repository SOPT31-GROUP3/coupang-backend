import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 오늘의 상품 조회
const getTodayProduct = async () => {
    const data = await prisma.product.findMany({
        take: 4
    });
    return data;
};

//* 베스트 상품 조회
const getBestProduct = async () => {
    const data = await prisma.product.findMany();
    return data;
}

const homeService = {
    getTodayProduct,
    getBestProduct,
};

export default homeService;
