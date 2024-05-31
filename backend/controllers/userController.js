import User from "../model/User.js";

const postUser = async (req, res) => {
  //TODO create a new user
  const { name } = req.body;
  if (name === '') return res.status(400).json({ message: "All fields are required" });

  const userExists = await User.findOne({ name });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  try {
    const user = new User(req.body);
    const saveUser = await user.save();
    res.json(saveUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getUser = async (req, res) => {
  //TODO get a user
  const { name } = req.body;
  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      _id: user._id,
      name: user.name
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {
  postUser,
  getUser
}