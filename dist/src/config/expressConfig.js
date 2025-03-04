"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helpers_1 = require("../shared/core/utils/helpers");
const all_routes_1 = tslib_1.__importDefault(require("../routes/all-routes"));
const errorHandler_1 = require("../middlewares/core/errorHandler");
class expressConfig {
    constructor(server) {
        const app = server;
        // ✔ SI usas Express detrás de un proxy inverso (NGINX, Heroku, AWS, Cloudflare).
        app.set('trust proxy', 1);
        // Limiter to all requests
        app.use(helpers_1.requestRateLimit);
        // ✔ Elimina el encabezado X-Powered-By: Express
        app.disable('x-powered-by');
        // CORS
        app.use((0, cors_1.default)());
        // Sin esto, req.body sería undefined en solicitudes con Content-Type: application/json
        app.use(express_1.default.json());
        // ROUTES
        app.use(all_routes_1.default);
        // Middleware global de manejo de errores
        app.use(errorHandler_1.errorHandler);
    }
}
exports.default = expressConfig;
//# sourceMappingURL=expressConfig.js.map