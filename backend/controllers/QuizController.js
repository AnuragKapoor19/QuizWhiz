const Quiz = require("../models/Quiz");
const Sequelize = require('../config/db');

const addQuestion = async (req, res) => {
    try {
        const { title, question, optionA, optionB, optionC, optionD, correctAnswer, difficulty, category } = req.body;

        if (!title || !question || !optionA || !optionB || !optionC || !optionD || !correctAnswer || !category) {
            return res.status(400).json({
                success: false,
                message: "Please enter all details"
            })
        }

        const Question = await Quiz.create({
            title,
            question,
            optionA,
            optionB,
            optionC,
            optionD,
            correctAnswer,
            difficulty,
            category,
            createdBy: req.user.id
        })

        res.status(200).json({
            success: true,
            message: "Question added successfully!"
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getQuestions = async (req, res) => {
    try {
        const { category, difficulty, limit } = req.query;

        const questions = await Quiz.findAll({
            where: { category: category, difficulty: difficulty },
            order: Sequelize.literal('RAND()'),
            limit: parseInt(limit)
        })

        if (questions.length > 0) {
            return res.status(200).json({
                success: true,
                questions
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "No question found"
            })
        }


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;

        const question = await Quiz.destroy({ where: { id } })

        res.status(200).json({
            success: true,
            message: "Question deleted!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const question = await Quiz.findByPk(id);

        if (!question) {
            return res.status(400).json({
                success: false,
                message: "No question found!"
            })
        }

        await question.update(updatedData);

        res.status(200).json({
            success: true,
            message: "Question Updated successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getAllQuestions = async (req, res) => {
    try {
        const questions = await Quiz.findAll();

        if (questions.length > 0) {
            return res.status(200).json({
                success: true,
                questions
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "No question found"
            })
        }


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { addQuestion, getQuestions, deleteQuestion, updateQuestion, getAllQuestions };