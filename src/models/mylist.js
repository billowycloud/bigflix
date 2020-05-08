import mongoose, { Schema } from "mongoose";

//mongoDB | 스키마 생성
const MyListSchema = new Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    movieInfo: {
      type: Array,
    },
    movieId: {
      type: String,
    },
    movieTrue: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

//mongoDB | 모델 생성
const MyList = mongoose.model("MyList", MyListSchema);
export default MyList;
