import Router from "koa-router";
import auth from "./auth";
import mylist from "./mylist";

const api = new Router();

api.use("/auth", auth.routes());
api.use("/mylist", mylist.routes());

export default api;
