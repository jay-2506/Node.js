// import mongoose from "mongoose";
// import bcrypt from "bcrypt";

// const userSchema = new mongoose.Schema({
//   firstname: {
//     type: String,
//     required: true,
//   },
//   lastname: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     validate: {
//       validator: function (value) {
//         const emailRegex =
//           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
//         return emailRegex.test(value);
//       },
//       message: "Please enter a valid email",
//     },
//   },

//   password: {
//     type: String,
//     required: true,
//   },
// });

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) next;
//   try {
//     this.password = await bcrypt.hash(this.password, 10);
//     next;
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// });

// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
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
    unique: true,
    validate: {
      validator: function (value) {
        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return emailRegex.test(value);
      },
      message: "Please enter a valid email",
    },
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next;
  } catch (error) {
    console.log("Password hashing error:", error);
    next(error);
  }
});

export default mongoose.model("User", userSchema);
