import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* Category product pagination 조회
const getCategoryProduct = async (page: number, limit: number) => {
    try {
        let start: number = 0;

        if (page <= 0) {
            page = 1;
        } else {
            start = (page - 1) * limit;
        }
        const cnt = await prisma.product.count({});
        if (page > Math.round(cnt / limit)) { // 클라가 요청한 데이터가 더 큰페이지면 null반환
            return null;
        }

        const data = await prisma.product.findMany({
            skip: start,
            take: limit
        })
        return data;
    } catch (err) {
        console.log("데이터 조회 실패");
        return err;
    }


}

const categoryService = {
    getCategoryProduct,
}

export default categoryService;