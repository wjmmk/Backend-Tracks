
const handleHttpError = (res, error) => {
    console.log(error);
    res.status(500);
    res.send({ error: "ERROR" });
}

const handleErrorResponse = ( res, mesage = "Algo salio mal", code = 401) => {
    console.log("handleErrorResponse", mesage);
    res.status(code);
    res.send({ error: mesage });
};

module.exports = { handleHttpError, handleErrorResponse };