"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("../../controllers/app-angular-spotify.ts/Controller");
const routes = (0, express_1.Router)();
routes.get('/', Controller_1.ApiGet);
routes.get('/spotify/token', Controller_1.SpotifyToken);
exports.default = routes;
//# sourceMappingURL=routes.js.map