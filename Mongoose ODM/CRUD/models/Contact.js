const mongoose = require("mongoose");
const connectSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"],
    minLength: 4,
    maxLength: 10,
    trim: true,
    validate: {
      validator: function (value) {
        const nameRegex = /^[a-zA-Z\s]*$/;
        return nameRegex.test(value);
      },
      message: "First name must container  only alphabetic characters",
    },
  },
  lastname: {
    type: String,
    required: [true, "Last name is require"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Contact", connectSchema);
