import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password, 10);
  next()
})


const User = new mongoose.model("User", userSchema);

export default User;
