const express = require('express')
const { createUser, login, logout, getUser, deleteUser, updateUser, getAllusers } = require('../controllers/UserController');
const authenticate = require('../middleware/Authenticate');
const authorize = require('../middleware/Authorize');
const router = express.Router()

router.post('/signup', createUser);

router.post('/login', login);

router.get('/logout', logout);

router.get('/me', authenticate, getUser)

router.put('/me/update', authenticate, updateUser)

router.get('/admin/users', authenticate, authorize('admin'), getAllusers)

router.delete('/admin/delete/:id', authenticate, authorize('admin'), deleteUser)

module.exports = router;
