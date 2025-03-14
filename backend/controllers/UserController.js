const getToken = require("../JWT/GetToken");
const User = require("../models/User");
const bcrypt = require('bcryptjs')

const createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all credentials"
            })
        }

        const alreadyExisting = await User.findOne({ where: { email } });

        if (alreadyExisting) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            })
        }

        const salt = await bcrypt.genSalt(10)

        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            username,
            email,
            password: hashPassword,
            role
        })

        const token = await getToken({ id: newUser.id })

        res.status(201)
            .cookie('token', token, { expires: new Date(Date.now() + 604800000), httpOnly: true, sameSite: 'None', secure: true })
            .json({
                success: true,
                message: "User created successfully!"
            })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter credentials!"
            })
        }

        const userExists = await User.findOne({ where: { email } });

        if (!userExists) {
            return res.status(400).json({
                success: false,
                message: "User not found!"
            })
        }

        const matchPassword = await bcrypt.compare(password, userExists.password)

        if (!matchPassword) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Password!"
            })
        }

        const token = await getToken({ id: userExists.id })

        res.status(200)
            .cookie('token', token, { expires: new Date(Date.now() + 604800000), httpOnly: true, sameSite: 'None', secure: true })
            .json({
                success: true,
                message: "LoggedIn successfully!"
            })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const logout = async (req, res) => {
    try {
        res.status(200)
            .cookie('token', null, { expires: new Date(Date.now()), httpOnly: true })
            .json({
                success: true,
                message: "Logged Out successfully!"
            })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getUser = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//Admin Controllers
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Provide the Id!"
            })
        }

        await User.destroy({ where: { id } })

        res.status(200).json({
            success: true,
            message: 'User Deleted Successfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createUser, login, logout, getUser, deleteUser };