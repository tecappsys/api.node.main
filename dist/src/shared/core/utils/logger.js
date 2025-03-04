"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const tslib_1 = require("tslib");
const winston_1 = tslib_1.__importDefault(require("winston"));
// Configuración de formatos de logs
const logFormat = winston_1.default.format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});
// Configuración de `winston` con múltiples transportes
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.colorize(), logFormat),
    transports: [
        new winston_1.default.transports.Console(), // Log en consola
        // new winston.transports.File({ filename: path.join(__dirname, "../../logs/server.log") }), // Log en archivo
        // new winston.transports.Http({ host: "logserver.com", path: "/logs", port: 3000 }) // Log en un servidor remoto
    ]
});
// Función auxiliar para logs estructurados
exports.log = {
    info: (genericLog) => logger.info(`📢 ${genericLog.title} - ${genericLog.description}`),
    warn: (genericLog) => logger.warn(`⚠️ ${genericLog.title} - ${genericLog.description}`),
    error: (genericLog) => logger.error(`🚫 ${genericLog.title} - ${genericLog.description}`),
    debug: (genericLog) => logger.debug(`🪲 ${genericLog.title} - ${genericLog.description}`)
};
exports.default = logger;
//# sourceMappingURL=logger.js.map