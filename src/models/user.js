import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

//mongoDB | 스키마 생성
const UserSchema = new Schema({
  username: String,
  hashedPassword: String
});

//비밀번호를 받아 계정의 hashPW값을 설정
UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

//입력한 비밀번호가 해당 계정의 비밀번호와 일치 여부
UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // boolean
};

//username으로 데이터 찾기
UserSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
};

//mongoDB | 모델 생성
const User = mongoose.model("User", UserSchema);
export default User;
