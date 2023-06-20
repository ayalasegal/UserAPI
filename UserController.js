// Import the User module or model
const User = require('./UserModule');
const controller = {
  getAllUsers: async (req, res) => {
      res.status(200).json(User.getUsers());
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserByName: async (req, res) => {
    const { name } = req.query;
    try {
      const user = await User.findOne({ name });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserByMail: async (req, res) => {
    const { email } = req.query;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getEmployeeByPhone: async (req, res) => {
    const { phone } = req.query;
    try {
      const user = await User.findOne({ phone });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  addNewUser: async (req, res) => {
    const { name, email, phone } = req.body;
    try {
      const newUser = await User.createUser(name, email, phone);
      res.status(201).json(newUser);
    } catch (error) {
      // Handle the thrown error and send an appropriate response
      if (error.message === "All fields are required") {
        res.status(400).json({ error: "All fields are required" });
      } else if (error.message === "Invalid email format") {
        res.status(400).json({ error: "Invalid email format" });
      } else if(error.message === "The phone number is invalid"){
        res.status(400).json({ error: "The phone number is invalid"})
      } else {
        res.status(500).json({ error: "Internal server error" });
      }

    }
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, phone },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = controller;
