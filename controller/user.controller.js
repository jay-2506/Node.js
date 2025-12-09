import User from "../Models/user.model.js";

// CREATE
export const createuser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ message: "User saved", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "User cannot be saved" });
  }
};

// READ (get all users)
export const readuser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Users not found" });
  }
};

//READ by ID
export const findById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    if (!users) {
      return res.status(404).json({ message: "user can't find" });
    }
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user founded" });
  }
};

// UPDATE
export const updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const updatedUser = await User.findByIdAndUpdate({ _id: id }, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found for update" });
    }

    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User not updated" });
  }
};

// delete
export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await User.findByIdAndDelete(id);
    if (!deleteuser) {
      return res.status(404).json({ message: "User not found for delete" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not delete" });
  }
};
