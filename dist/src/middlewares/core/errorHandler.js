"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../../shared/core/utils/logger");
const aux_response_1 = require("../../shared/core/utils/aux-response");
const errorHandler = (error, req, res, next) => {
    logger_1.log.info({ title: 'CORE_MIDDLEWARE_ERROR_HANDLER', description: `Error interno del servidor: ${error.stack}` });
    return (0, aux_response_1.serverErrorResponse)(res, error, 'Error interno del servidor');
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map