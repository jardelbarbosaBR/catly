import User from "../models/user.models.js";

const UserCreate = async (body) => await User.create(body);
const findUser = async (id) => await User.findOne({email: id})

export { UserCreate, findUser };
