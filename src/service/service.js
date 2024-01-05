import Url from "../models/models.js";


const NewUrlSave = (body) => Url.create(body)
const SearchUrl = (id) => Url.findOne(id)



export {NewUrlSave, SearchUrl}