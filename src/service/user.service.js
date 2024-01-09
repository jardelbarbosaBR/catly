import User from "../models/user.models.js";

const UserCreate = async (body) => await User.create(body);
const findUser = async (id) => await User.findOne({ email: id });
const findAll = async () => await User.find();
const deleteOneUser = async (user_email) => await User.findOneAndDelete({email: user_email})


export { UserCreate, findUser, findAll, deleteOneUser };
