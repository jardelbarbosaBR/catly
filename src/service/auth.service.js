import mongoose from "mongoose";
import User from "../models/user.models.js";

const loginService = async (id) => await User.findOne({email: id}).select('+password')

export { loginService }