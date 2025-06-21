const router = require('express').Router()
const protect = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/role')
const { getAllUsersWithTasks } = require('../controllers/adminController')

router.get('/users', protect, isAdmin, getAllUsersWithTasks)

module.exports = router
