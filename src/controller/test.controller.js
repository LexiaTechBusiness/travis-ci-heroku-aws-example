const { User } = require('../models');

async function test(req, res) {
  try {
    await User.create({ name: 'Joshua' });

    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { test };
