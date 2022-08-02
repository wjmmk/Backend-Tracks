const handleHttpError  = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');
const {usersModel} = require('../models');
const getProperties = require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();// tomas las propiedades del los (_id:id) del las bases de datos para usarlos independientemente de la base de datos


const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        if (!token) {
            handleHttpError(res, "Token is required", 401);
            return;
        }
        const dataToken = await verifyToken(token);
        req.user = dataToken;

        if(!dataToken) {
            handleHttpError(res, "Invalid token", 401);
            return;
        }

        const query = {
            [propertiesKey.id]: dataToken[propertiesKey.id]
        }

        const userDb = await usersModel.findOne({query});
        req.userDb = userDb;

        next();
    } catch (error) {
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;