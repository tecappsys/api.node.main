"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
/**
 * Middleware para manejar errores en funciones async sin necesidad de `try/catch`.
 *
 * El error capturado por catch(next); será manejado por el middleware global de errores (errorMiddleware.ts)
 */
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
exports.asyncHandler = asyncHandler;
//# sourceMappingURL=asyncHandler.js.map