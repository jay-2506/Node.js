import User from "../models/user.models.js";
import jwt from "jsonwebtoken";



const generateToken = (userId, name)=>{
  return jwt.sign({id:userId , role:user.role},process.env.JWT_SECRET,{expiresIn:"7d"})
  
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User Created", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single user
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User Updated", updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user=User.findById(req.params.id)
    if(!user){
      res.json({ message: "User Not Found" });
    }
    const deletedUser = await User.findByIdAndDelete({_id:user._id});

    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    res.status(200).json({
      message: "Login Successful",
      token: generateToken(user._id, user.name),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


