"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSuccessResponse = exports.setErrorResponse = void 0;
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
const setSuccessResponse = (res, data) => {
    res.status(200).json({
        success: true,
        data: data,
    });
};
exports.setSuccessResponse = setSuccessResponse;
