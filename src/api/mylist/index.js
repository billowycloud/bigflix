import Router from "koa-router";
import * as mylistCtrl from "./mylist.ctrl";

const mylist = new Router();

mylist.post("/saved", mylistCtrl.saved);
mylist.post("/add", mylistCtrl.add);
mylist.post("/remove", mylistCtrl.remove);

export default mylist;
