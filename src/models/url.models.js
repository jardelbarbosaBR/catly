import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  url: String,
  codeurl: String,
  shortenedURL: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  views:{
    type: Number,
    default: 0
  }
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
