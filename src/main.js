require("dotenv").config(); //.env 파일에서 환경 변수 불러오기
import Koa from "koa"; //const Koa = require("koa");
import Router from "koa-router";
import api from "./api";
import jwtMiddleware from "./lib/jwtMiddleware";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import serve from "koa-static";
import path from "path";
import send from "koa-send";

const { PORT, MONGO_URI } = process.env;
const app = new Koa();
const router = new Router();

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(`DB Connection Error: ${e.message}`);
  });

//라우터 설정
router.use("/api", api.routes());

const buildDirectory = path.resolve(__dirname, "../frontend/build");

app
  .use(bodyParser()) //bodyParser 는 라우터 전에 적용하기
  .use(jwtMiddleware)
  .use(router.routes()) //라우터 적용
  .use(router.allowedMethods())
  .use(serve(buildDirectory))
  .use(async (ctx) => {
    // Not Found 이고, 주소가 /api 로 시작하지 않는 경우
    if (ctx.status === 404 && ctx.path.indexOf("/api") !== 0) {
      // index.html 내용을 반환
      await send(ctx, "index.html", { root: buildDirectory });
    }
  });

//포트 미지정시 4000 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log("Listening to port: %d", port);
});
