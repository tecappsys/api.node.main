"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyGitHook = void 0;
const git_service_1 = require("../../services/git-hook-ci-cd/git.service");
const logger_1 = require("../../shared/core/utils/logger");
const VerifyGitHook = (req, res, next) => {
    const signature = req.headers["x-hub-signature-256"];
    if (!(0, git_service_1.verifySignature)(req.body, signature)) {
        logger_1.log.warn({ title: 'GIT_HOOK_CI_CD_MIDDLEWARE_VERIFY_GIT_HOOK', description: `Firma inválida en el webhook para el repositorio.` });
        return res.status(401).send("Invalid signature");
    }
    logger_1.log.info({ title: 'GIT_HOOK_CI_CD_MIDDLEWARE_VERIFY_GIT_HOOK', description: `Webhook verificado con éxito.` });
    next();
};
exports.VerifyGitHook = VerifyGitHook;
//# sourceMappingURL=verifyGitHook.js.map