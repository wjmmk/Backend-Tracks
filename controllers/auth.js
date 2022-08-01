const { matchedData } = require('express-validator');
const { tokenSign } = require('../utils/handleJwt');
const { encrypt, compare } = require('../utils/handlePassword');
const handleHttpError = require('../utils/handleError');
const { usersModel } = require('../models');


const registerController = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, { strict: false });

        const result = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({ result })
    } catch (error) {
        handleHttpError(error, res);
    }
}

const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email }).select('password username rol email');
        if (!user) {
            handleHttpError(res, "User not found", 404);
            return;
        }

        const hashPassword = user.get('password');
        const checkPassword = compare(req.password, hashPassword);

        if (!checkPassword) {
            handleHttpError(res, "Password is incorrect", 401);
            return;
        } else {
            user.set('password', undefined, { strict: false });
            const result = {
                token: await tokenSign(user),
                user
            }
            res.send({ result })
        }
    } catch (error) {
        handleHttpError(res, "Invalid email or password");
    }
}

module.exports = { loginController, registerController };