"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const expressConfig_1 = tslib_1.__importDefault(require("../config/expressConfig"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.middlewares();
        const expressApp = new expressConfig_1.default(this.app);
        expressApp;
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`SERVIDOR CORRIENDO EN PUERTO ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map