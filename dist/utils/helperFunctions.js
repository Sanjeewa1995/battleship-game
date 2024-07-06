"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setErrorResponse = void 0;
const setErrorResponse = (res, statusCode, error) => {
    let errorMessage = error;
    if (error instanceof Error) {
        errorMessage = error.message.replace('"', "").replace('"', "");
    }
    res.status(statusCode).json({
        success: false,
        data: null,
        errorMessage,
    });
};
exports.setErrorResponse = setErrorResponse;
