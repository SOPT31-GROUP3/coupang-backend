import express, { NextFunction, Request, Response } from "express";
import router from "./router";
import config from "./config";

const cors = require('cors');

require('dotenv').config();

const app = express(); // express 객체 받아옴
const PORT = 3000; // 사용할 port를 3000번으로 설정

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", config.BaseUrl]
}));

app.use(express.json()); // express 에서 request body를 json 으로 받아오겠다.
app.use("/", router); // use -> 모든 요청

//* HTTP method - GET
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("쿠팡서버 ! !");
});

app.listen(PORT, () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); // 3000 번 포트에서 서버를 실행하겠다!
