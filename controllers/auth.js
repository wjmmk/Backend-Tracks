const { tokenSign } = require('../utils/handleJwt');
const { encrypt, compare } = require('../utils/handlePasswordBcrypt');
const {handleHttpError} = require('../utils/handleError');
const { usersModel } = require('../models/index');


const registerController = async (req, res) => {
    try {
        //req = matchedData(req);
        console.log(req.body)
        const { email } = req.body
        const user = await usersModel.findOne({ where: {email: email } });
        console.log(user)
        if (user) {
            throw new Error('User already exists!!!');
        }
        const hashPassword = await encrypt(req.password);
        const newUser = await usersModel.create({
            username: req.username,
            age: req.age,
            email: req.email,
            password: hashPassword,
            rol: req.rol
        });

        newUser.set('password', undefined, { strict: false });
        const result = {
            user: newUser,
            token: tokenSign(newUser)
        };
        res.send({ result });
    }
    catch (error) {
        handleHttpError(res, error.message);
    }
}


const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email })
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

  const getItems = async (req, res) => {
    try {
      const data = await usersModel.find({});
      res.send({ data });
    } catch (error) {
      handleHttpError(res, "ERROR_LIST_ITEMS")
    }  
  }

module.exports = { loginController, registerController, getItems };