"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErrorResponse = exports.handleServerErrorResponse = exports.notFoundResponse = exports.forbiddenResponse = exports.unauthorizedResponse = exports.badRequestResponse = exports.successResponse = exports.sendResponse = void 0;
const sendResponse = (res, statusCode, options) => {
    return res.status(statusCode).json({
        success: statusCode < 400,
        message: options.message,
        data: options.data,
        error: options.error,
        statusCode
    });
};
exports.sendResponse = sendResponse;
/**
 * 200 OK - Respuesta exitosa con datos opcionales.
 */
const successResponse = (res, message, data) => {
    return (0, exports.sendResponse)(res, 200, { message, data });
};
exports.successResponse = successResponse;
/**
 * 400 Bad Request - Error de validación u otros problemas del cliente.
 */
const badRequestResponse = (res, message, error) => {
    return (0, exports.sendResponse)(res, 400, { message, error });
};
exports.badRequestResponse = badRequestResponse;
/**
 * 401 Unauthorized - No autenticado.
 */
const unauthorizedResponse = (res, message) => {
    return (0, exports.sendResponse)(res, 401, { message });
};
exports.unauthorizedResponse = unauthorizedResponse;
/**
 * 403 Forbidden - No autorizado para acceder.
 */
const forbiddenResponse = (res, message) => {
    return (0, exports.sendResponse)(res, 403, { message });
};
exports.forbiddenResponse = forbiddenResponse;
/**
 * 404 Not Found - Recurso no encontrado.
 */
const notFoundResponse = (res, message, error) => {
    return (0, exports.sendResponse)(res, 404, { message, error });
};
exports.notFoundResponse = notFoundResponse;
/**
 * 500 Internal Server Error - Fallo en el servidor.
 */
const handleServerErrorResponse = (res, message, error) => {
    return (0, exports.sendResponse)(res, 500, { message, error });
};
exports.handleServerErrorResponse = handleServerErrorResponse;
/**
 * Manejo centralizado de errores en controladores
 */
const serverErrorResponse = (res, error, customMessage = 'Error interno del servidor') => {
    let errorMessage = 'Ocurrió un error inesperado';
    if (error instanceof Error) {
        errorMessage = error.message; // Extraer mensaje si es una instancia de Error
    }
    else if (typeof error === 'string') {
        errorMessage = error; // Si el error es un string, úsalo directamente
    }
    return (0, exports.handleServerErrorResponse)(res, customMessage, errorMessage);
};
exports.serverErrorResponse = serverErrorResponse;
//# sourceMappingURL=aux-response.js.map