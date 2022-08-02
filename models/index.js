const ENGINE_DB = process.env.ENGINE_DB || null;
const pathModels = (ENGINE_DB === 'nosql') ? './nosql' : './mysql';

const models = {
    usersModel: require(`${pathModels}/users`),
    tracksModel: require(`${pathModels}/tracks`),
    storagesModel: require(`${pathModels}/storages`),
}


module.exports = models;