"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyGitHook_1 = require("../../middlewares/git-hook-ci-cd/verifyGitHook");
const Controller_1 = require("../../controllers/git-hook-ci-cd/Controller");
const routes = (0, express_1.Router)();
routes.get('/', verifyGitHook_1.VerifyGitHook, Controller_1.UpdateRepos);
routes.get('/node-main', verifyGitHook_1.VerifyGitHook, Controller_1.UpdateNodeMain);
exports.default = routes;
//# sourceMappingURL=routes.js.map