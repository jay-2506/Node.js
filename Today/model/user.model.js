import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const user = mongoose.model("User", userschema);
// export default mongoose.model("User",userschema)

export default user;
