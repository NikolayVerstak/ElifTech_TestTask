export const responseMiddleware = (data, req, res, next) => {
    if (data instanceof Error) {
        const code = data.code || 400;
        const message = data.errorMessage || "Unexpected error occurred";
        console.error(data);
        return res.status(code).send({ error: true, message });
    }

    return res.status(200).send(data);
};

// сustom error handler
export const sendErrorResponse = (message, code = 400) => {
    const error = new Error();
    error.errorMessage = message;
    error.code = code;
    return error;
};
