import User from "../model/user.model.js";

// create
export const createuser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ message: "User not created" });
  }
};

// read
export const readuser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "user not found" });
  }
};

// delete
export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await User.findByIdAndDelete(id);
    if (!deleteuser)
      return res.status(404).json({ message: "user not founded" });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "user can't deleted" });
  }
};

// update
export const updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedata = req.body;
    const updateuser = await User.findByIdAndUpdate({ _id: id }, updatedata, {
      new: true,
    });
    if (!updateuser) {
      return res.status(404).json({ message: "user not updated" });
    }
    res.status(200).json({ message: "user updated", user: updateuser });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "user can't be updated" });
  }
};

// get single user
export const getsingleuser = async (req, res) => {
  try {
    const { id } = req.params;
    const singleuser = await User.findById(id);
    res
      .status(200)
      .json({ message: "User find sucessfully", user: singleuser });
  } catch (error) {
    console.lg(error.message);
    res.status(400).json({ message: "User not found" });
  }
};
// get user by email
export const getuserbyemail = async (req, res) =>{
  try {
    const { email} = req.params;
    const userbyemail = await User.findOne({email: email});
    res.staus(200).json({message: "User find by email successfully", user: userbyemail})
  }catch (error){
    console.log(error.message);
    res.status(400).json({ message: "User not found by email" });

  }
};
// get user by name 

export const getuserbyname = async (req, res) =>{
  try {
    const {name} = req.params;
    const userbyname = await User.findOne({name: name})
    res.status(200).json({message:"User find by name successfully", user: userbyname})
  }catch (error){
    console.log(error.message);
    res.status(400).json({ message: "User not found by name"});
    
  }
  }