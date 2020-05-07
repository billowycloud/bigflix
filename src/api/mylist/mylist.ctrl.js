import MyList from "../../models/mylist";

export const saved = async (ctx) => {
  const { movieId, userFrom } = ctx.request.body;
  try {
    const mylist = await MyList.find({ movieId: movieId, userFrom: userFrom }).exec();
    let result = false;
    if (mylist.length !== 0) {
      result = true;
    }
    ctx.body = { success: true, saved: result };
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const add = async (ctx) => {
  const list = new MyList(ctx.request.body);
  try {
    await list.save();
    ctx.body = { success: true };
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { movieId, userFrom } = ctx.request.body;

  try {
    await MyList.findOneAndDelete({ movieId: movieId, userFrom: userFrom }).exec();
    ctx.body = { success: true };
  } catch (e) {
    ctx.throw(500, e);
  }
};
