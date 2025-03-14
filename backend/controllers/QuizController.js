const Quiz = require("../models/Quiz");

const addQuestion = async (req, res) => {
    try {
        const { title, question, optionA, optionB, optionC, optionD, correctAnswer, difficulty, category, createdBy } = req.body;

        if (!title || !question || !optionA || !optionB || !optionC || !optionD || !correctAnswer || !category || !createdBy) {
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
            createdBy
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
        const { category, difficulty } = req.query;

        const questions = await Quiz.findAll({ where: { category: category, difficulty: difficulty } })

        if (questions.length > 0) {
            return res.status(200).json({
                success: false,
                questions
            })
        }
        else {
            res.status(200).json({
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

module.exports = { addQuestion, getQuestions, deleteQuestion, updateQuestion };