import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "age is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    unique: true,
  },
});

// password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next;
});

export default mongoose.model("User", userSchema);
