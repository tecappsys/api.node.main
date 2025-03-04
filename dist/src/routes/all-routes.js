"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const routes_1 = tslib_1.__importDefault(require("./app-angular-spotify/routes"));
const routes_2 = tslib_1.__importDefault(require("./git-hook-ci-cd/routes"));
const paths_1 = require("../shared/app-angular-spotify/enum/paths");
const paths_2 = require("../shared/git-hook-ci-cd/enum/paths");
const routes = (0, express_1.Router)();
// Define las rutas según los PATHS configurados en ROUTER_PATHS
routes.use(paths_1.PATHS.API, routes_1.default);
routes.use(paths_2.PATHS.API, routes_2.default);
exports.default = routes;
//# sourceMappingURL=all-routes.js.map