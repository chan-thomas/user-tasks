const User = require('../models/user');

module.exports = {
  createUser: async (req, res) => {
    console.log(`create user`);
    try {
      const { email, username } = req.body;
      const user = new User({ email, username });
      await user.save();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  editUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { email } = req.body;
      await User.findByIdAndUpdate(id, { email });
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  listUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteUser: async (req, res) => {
    console.log(`delete user`);
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
