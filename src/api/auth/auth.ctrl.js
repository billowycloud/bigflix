import Joi from '@hapi/joi';
import User from '../../models/user';

/*
    POST /api/auth/register
    {
        email: '계정명(이메일)',
        password: '비밀번호'
    }
*/
export const register = async ctx => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { email, password } = ctx.request.body;
  try {
    //email이 이미 존재하는지 확인
    const exists = await User.findByEmail(email);
    if (exists) {
      ctx.status = 409;
      return;
    }
    const user = new User({ email });
    await user.setPassword(password); //비밀번호 설정
    await user.save(); //DB에 저장

    ctx.body = user.serialize();
    //토큰 발급
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7d
      httpOnly: true
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    POST /api/auth/login
    {
        email: '계정명',
        password: '비밀번호'
    }
*/
export const login = async ctx => {
  const { email, password } = ctx.request.body;

  if (!email || !password) {
    ctx.status = 401; //Unauthorized
    return;
  }
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7d
      httpOnly: true
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    GET /api/auth/check
*/
export const check = async ctx => {
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};

/*
    POST /api/auth/logout
*/
export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204;
};
