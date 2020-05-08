import MyList from "../../models/mylist";

export const saved = async (ctx) => {
  const { movieInfo, userFrom, movieTrue, movieId } = ctx.request.body;
  try {
    const mylist = await MyList.find({
      movieInfo: movieInfo,
      userFrom: userFrom,
      movieTrue: movieTrue,
      movieId: movieId,
    }).exec();
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
  const { movieInfo, userFrom, movieTrue, movieId } = ctx.request.body;

  const list = new MyList({
    movieInfo: movieInfo,
    userFrom: userFrom,
    movieTrue: movieTrue,
    movieId: movieId,
  });
  try {
    await list.save();
    ctx.body = { success: true };
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { movieInfo, userFrom, movieTrue, movieId } = ctx.request.body;

  try {
    await MyList.findOneAndDelete({
      movieInfo: movieInfo,
      userFrom: userFrom,
      movieTrue: movieTrue,
      movieId: movieId,
    }).exec();
    ctx.body = { success: true };
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const getMovie = async (ctx) => {
  const { userFrom } = ctx.request.body;
  try {
    const mylist = await MyList.find({
      userFrom: userFrom,
    }).exec();
    ctx.body = { success: true, mylist };
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const removeFromList = async (ctx) => {
  const { userFrom, movieTrue, movieId } = ctx.request.body;
  try {
    await MyList.findOneAndDelete({
      userFrom: userFrom,
      movieTrue: movieTrue,
      movieId: movieId,
    }).exec();
    ctx.body = { success: true };
  } catch (e) {
    ctx.throw(500, e);
  }
};
