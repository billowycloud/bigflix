import Koa from "koa"; //const Koa = require("koa");
import Router from "koa-router";
import api from "./api";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const PORT = 4000;
const router = new Router();

//라우터 설정
router.use("/api", api.routes());

app
  .use(bodyParser()) //bodyParser 는 라우터 전에 적용하기
  .use(router.routes()) //라우터 적용
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log("Listening to port: " + PORT);
});
