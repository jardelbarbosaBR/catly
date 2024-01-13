import Url from "../models/url.models.js";

const NewUrlSave = async (body) => await Url.create(body);
const SearchUrl = async (id) => await Url.findOne({ codeurl: id });
const UpdateView = async (code, viewAt) =>
  await Url.findOneAndUpdate({ codeurl: code }, { views: viewAt });
const UrlDelete = async (code) => await Url.findOneAndDelete({ codeurl: code });

export { NewUrlSave, SearchUrl, UpdateView, UrlDelete };
