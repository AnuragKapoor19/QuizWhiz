const jwt = require('jsonwebtoken')
require('dotenv').config()

const getToken = async (id) => {
    const token = await jwt.sign(id, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });
    return token;
}

module.exports = getToken;