const User = require('../models/User')

exports.getAllUsersWithTasks = async (req, res) => {
  const users = await User.find().select('-password').populate('tasks')
  const result = await Promise.all(users.map(async (user) => {
    const tasks = await require('../models/Task').find({ user: user._id })
    return { ...user.toObject(), tasks }
  }))
  res.json(result)
}
