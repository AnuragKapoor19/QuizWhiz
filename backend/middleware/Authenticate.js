const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
    try {
        // Ensure req.cookies exists
        if (!req.cookies || !req.cookies.token || req.cookies.token === undefined) {
            return res.status(403).json({
                success: false,
                message: "Please Login First!"
            });
        }

        const token = req.cookies.token;

        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findByPk(decoded.id)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found!"
            })
        }

        req.user = user

        next()

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = authenticate;