import Joi from "@hapi/joi";
import User from "../../models/user";

/*
    POST /api/auth/register
    {
        username: '계정명',
        password: '비밀번호'
    }
*/
export const register = async ctx => {
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required()
  });
};

/*
    POST /api/auth/login
    {
        username: '계정명',
        password: '비밀번호'
    }
*/
export const login = async ctx => {};

/*
    GET /api/auth/check
*/
export const check = async ctx => {};

/*
    POST /api/auth/logout
*/
export const logout = async ctx => {};
