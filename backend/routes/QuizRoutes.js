const express = require('express')
const { addQuestion, getQuestions, deleteQuestion, updateQuestion } = require('../controllers/QuizController')
const authenticate = require('../middleware/Authenticate')
const authorize = require('../middleware/Authorize')
const router = express.Router()

router.post('/question/add', authenticate, authorize('admin'), addQuestion)

router.get('/questions', authenticate, getQuestions)

router.put('/question/:id', authenticate, authorize('admin'), updateQuestion)

router.delete('/question/:id', authenticate, authorize('admin'), deleteQuestion)

module.exports = router;