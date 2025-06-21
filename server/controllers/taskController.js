const Task = require('../models/Task')

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 })
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching tasks' })
  }
}

exports.createTask = async (req, res) => {
  const { title, description } = req.body
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' })
  }

  try {
    const task = await Task.create({ title, description, user: req.user._id })
    res.status(201).json(task)
  } catch (err) {
    res.status(500).json({ message: 'Error creating task' })
  }
}

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task || task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not allowed' })
    }

    Object.assign(task, req.body)
    await task.save()
    res.json(task)
  } catch (err) {
    res.status(500).json({ message: 'Error updating task' })
  }
}

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task || task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not allowed' })
    }

    await task.deleteOne() // ✅ Fixed Mongoose v6+
    res.json({ message: 'Deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task' })
  }
}
