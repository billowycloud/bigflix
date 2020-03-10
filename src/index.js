const Koa = require("koa");
const app = new Koa();
const PORT = 4000;

app.use((ctx, next) => {
  console.log(1);
  next();
});

app.listen(PORT, () => {
  console.log("Listening to port: " + PORT);
});
