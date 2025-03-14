const express = require('express')
const { createUser, login, logout, getUser, deleteUser } = require('../controllers/UserController');
const authenticate = require('../middleware/Authenticate');
const authorize = require('../middleware/Authorize');
const router = express.Router()

router.post('/signup', createUser);

router.post('/login', login);

router.get('/logout', logout);

router.get('/me', authenticate, getUser)

router.delete('/admin/delete/:id', authenticate, authorize('admin'), deleteUser)

module.exports = router;
