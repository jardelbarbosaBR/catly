import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  url: String,
  codeurl: String,
  shortenedURL: String,
  views:{
    type: Number,
    default: 0
  }
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
