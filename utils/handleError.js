
const handleHttpError = (res, message) => {
    res.status(500);
    res.send({ error: message });
}

const handleErrorResponse = ( res, mesage = "Algo salio mal", code = 401) => {
    console.log("handleErrorResponse", mesage);
    res.status(code);
    res.send({ error: mesage });
};

module.exports = { handleHttpError, handleErrorResponse };