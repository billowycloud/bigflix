import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//mongoDB | 스키마 생성
const UserSchema = new Schema({
  email: { type: String, unique: true },
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

UserSchema.methods.serialize = function() {
  const data = this.toJSON(); //응답할 Data에서 hashedPassword 필드 제거
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      email: this.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d' // 7일동안 유효함
    }
  );
  return token;
};

//email 데이터 찾기
UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

//mongoDB | 모델 생성
const User = mongoose.model('User', UserSchema);
export default User;
