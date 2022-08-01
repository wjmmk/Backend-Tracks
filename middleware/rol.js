const handleHttpError = require("../utils/handleError");

const checkRol = (roles) => async (req, res, next) => {

    const {user} = req;
    try {
        if (user === 'admin') {
            const rolesByUser = user.role;
    
            const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
    
            if (checkValueRol) {
                handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
            } 
            next();
        }
    } catch (error) {
        return handleHttpError(res, "Error checking rol", 403);
    }
}

module.exports = checkRol;