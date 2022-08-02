const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();// tomas las propiedades del los (_id:id) del las bases de datos para usarlos independientemente de la base de datos


const tokenSign = async (data) => {
    //jsonwebtoken.sign(data, secret, { expiresIn: '1h' });
    const sign = jsonwebtoken.sign(
        {
            [propertiesKey.id]: data[propertiesKey.id],
            role: data.role,
        },
        JWT_SECRET,
        {
            expiresIn: '1h',
        }
    )
    return sign;
}

const verifyToken = async (tokenJwt) => {
    //return jsonwebtoken.verify(token, secret);
    try {
        return jsonwebtoken.verify(tokenJwt, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
}   



module.exports = { tokenSign, verifyToken };