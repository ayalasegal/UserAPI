// Import the User module or model
const User = require('./UserModule');
const controller = {
  getAllUsers: async (req, res) => {
      res.status(200).json(User.getUsers());
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserByName: async (req, res) => {
    const { name } = req.params;
    try {
      const user = await User.getUserByName(name);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserByMail: async (req, res) => {
    const { email } = req.params;
    try {
      const user = await User.getUserByMail(email);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserByPhone: async (req, res) => {
    const { phone } = req.params;
    try {
      const user = await User.getUserByPhone(phone);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  addNewUser: async (req, res) => {
    const { name, email, phone, birthDate } = req.body;
    try {
      const newUser = await User.createUser(name, email, phone, birthDate);
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
    const { name, email, phone,birthDate } = req.body;
    try {
      const updatedUser = await User.updateUser(id, name, email, phone,birthDate)
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
      const deletedUserId = User.deleteUser(id);
      console.log(deletedUserId)
      if (deletedUserId==null||deletedUserId==undefined) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = controller;
