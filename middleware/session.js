const handleHttpError  = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');
const {usersModel} = require('../models');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        if (!token) {
            handleHttpError(res, "Token is required", 401);
            return;
        }
        const user = await verifyToken(token);
        req.user = user;

        if(!user._id) {
            handleHttpError(res, "Invalid token", 401);
            return;
        }

        const userDb = await usersModel.findById(user._id);
        req.userDb = userDb;


        next();
    } catch (error) {
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;