const handleHttpError = (res, message = "Algo pasó", code = 403) => {
    res.status(error.statusCode || code);
    res.json({
        message: error.message,
        error: error.data
    });
}

module.exports = handleHttpError;