"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNodeMain = exports.UpdateRepos = void 0;
const asyncHandler_1 = require("../../middlewares/core/asyncHandler");
const logger_1 = require("../../shared/core/utils/logger");
const aux_response_1 = require("../../shared/core/utils/aux-response");
const git_service_1 = require("../../services/git-hook-ci-cd/git.service");
exports.UpdateRepos = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const repo = req.body.repository?.name;
    if (!repo) {
        logger_1.log.warn({ title: 'GIT_HOOK_CI_CD_CONTROLLER_UPDATE_REPOS', description: "Repositorio no encontrado en la solicitud." });
        return (0, aux_response_1.badRequestResponse)(res, 'Repositorio no encontrado');
    }
    logger_1.log.info({ title: 'GIT_HOOK_CI_CD_CONTROLLER_UPDATE_REPOS', description: `Webhook recibido para el repositorio: ${repo}` });
    const output = await (0, git_service_1.deployRepository)(repo);
    return (0, aux_response_1.successResponse)(res, `Despliegue exitoso para ${repo}`, { output });
});
exports.UpdateNodeMain = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const repo = req.body.repository?.name;
    if (!repo) {
        logger_1.log.warn({ title: 'GIT_HOOK_CI_CD_CONTROLLER_UPDATE_NODE_MAIN', description: "Repositorio no encontrado en la solicitud." });
        return (0, aux_response_1.badRequestResponse)(res, "Repositorio no encontrado.");
    }
    logger_1.log.info({ title: 'GIT_HOOK_CI_CD_CONTROLLER_UPDATE_NODE_MAIN', description: `Webhook recibido para el repositorio: ${repo}` });
    const output = await (0, git_service_1.deployNodeMain)(repo);
    return (0, aux_response_1.successResponse)(res, `Despliegue exitoso para ${repo}`, { output });
});
//# sourceMappingURL=Controller.js.map