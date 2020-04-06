require('dotenv').config(); //.env 파일에서 환경 변수 불러오기
import Koa from 'koa'; //const Koa = require("koa");
import Router from 'koa-router';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

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
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.log(`DB Connection Error: ${e.message}`);
  });

//라우터 설정
router.use('/api', api.routes());

app
  .use(bodyParser()) //bodyParser 는 라우터 전에 적용하기
  .use(jwtMiddleware)
  .use(router.routes()) //라우터 적용
  .use(router.allowedMethods());

//포트 미지정시 4000 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port: %d', port);
});
