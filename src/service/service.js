import Url from "../models/models.js";


const NewUrlSave = async (body) => await Url.create(body)
const SearchUrl = async (id) => await Url.findOne({codeurl: id})
const UpdateView = async (code, viewAt) => await Url.findOneAndUpdate({codeurl: code}, {views: viewAt})

export {NewUrlSave, SearchUrl, UpdateView}