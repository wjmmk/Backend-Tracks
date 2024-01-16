const bcryptjs = require('bcryptjs');

const encrypt = (password) => {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
}
const compare = (password, hash) => {
    return bcryptjs.compareSync(password, hash);
}
module.exports = { encrypt, compare };
