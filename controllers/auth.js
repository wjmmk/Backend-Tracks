const { tokenSign } = require('../utils/handleJwt');
const { encrypt, compare } = require('../utils/handlePasswordBcrypt');
const {handleHttpError} = require('../utils/handleError');
const { usersModel } = require('../models/index');


const registerController = async (req, res) => {
    try {
        const { username, age, email, password, rol } = req.body
        const user = await usersModel.findOne({ email });
      
        if (user) {
            throw new Error('User already exists!!!');
        }
        const hashPassword = encrypt(password);
        const newUser = await usersModel.create({
            username: username,
            age: age,
            email: email,
            password: hashPassword,
            rol: rol
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
        const user = await usersModel.findOne({ email: req.body.email })
        if (!user) {
            handleHttpError(res, "User not found", 404);
            return;
        }

        const hashPassword = user.get('password');
        const checkPassword = compare(req.body.password, hashPassword);

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