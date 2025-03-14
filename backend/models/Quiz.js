// models/Quiz.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User'); // Import the User model

const Quiz = sequelize.define('Quiz', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionB: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionD: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correctAnswer: {
        type: DataTypes.ENUM('A', 'B', 'C', 'D'),
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.ENUM('easy', 'medium', 'hard'),
        defaultValue: 'easy',
    },
    category: {
        type: DataTypes.ENUM('General Knowledge', 'Science & Nature', 'History', 'Geography', 'Sports', 'Entertainment', 'Literature', 'Mathematics', 'Technology', 'Mythology'),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
    tableName: 'quizzes',
});

// Define the association between Quiz and User
Quiz.belongsTo(User, {
    foreignKey: {
        name: 'createdBy',  // Foreign key column in Quiz table
        allowNull: false,   // Ensure it cannot be null
    },
    onDelete: 'CASCADE',  // If user is deleted, quizzes are deleted too
});

module.exports = Quiz;
