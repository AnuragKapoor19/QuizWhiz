const authorize = (...roles) => {
    return async (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        }
        else {
            return res.status(400).json({
                success: false,
                message: `Role ${req.user.role} is not authorized!`
            })
        }
    }
}

module.exports = authorize;