"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployNodeMain = exports.deployRepository = exports.verifySignature = void 0;
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const child_process_1 = require("child_process");
const util_1 = tslib_1.__importDefault(require("util"));
const path_1 = tslib_1.__importDefault(require("path"));
const logger_1 = require("../../shared/core/utils/logger");
const execPromise = util_1.default.promisify(child_process_1.exec);
const GIT_HOOK_SECRET = process.env.GIT_HOOK_SECRET;
const REPO_SCRIPTS_PATH = path_1.default.join(__dirname, "../../scripts/");
/**
 * Verifica la firma del GitHub Hook
 */
const verifySignature = (body, signature) => {
    if (!signature)
        return false;
    const computedSig = `sha256=${crypto_1.default
        .createHmac("sha256", GIT_HOOK_SECRET)
        .update(JSON.stringify(body))
        .digest("hex")}`;
    return signature === computedSig;
};
exports.verifySignature = verifySignature;
/**
 * Ejecuta el script de despliegue de un repositorio
 */
const deployRepository = async (repo) => {
    const deployCommand = `${REPO_SCRIPTS_PATH}repoToWebSite.sh ${repo} ${process.env[repo]} ${process.env.REPOS_PATH + repo} ${process.env.LOG_FILE}`;
    try {
        logger_1.log.info({ title: 'GIT_HOOK_CI_CD_SERVICE_DEPLOY_REPOSITORY', description: `Iniciando despliegue para ${repo}...` });
        const { stdout } = await execPromise(deployCommand);
        logger_1.log.info({ title: 'GIT_HOOK_CI_CD_SERVICE_DEPLOY_REPOSITORY', description: `Despliegue exitoso para ${repo}: ${stdout}` });
        return stdout;
    }
    catch (error) {
        logger_1.log.error({ title: 'GIT_HOOK_CI_CD_SERVICE_DEPLOY_REPOSITORY', description: `Error en despliegue de ${repo}: ${error.message}` });
        throw new Error("Error durante el despliegue.");
    }
};
exports.deployRepository = deployRepository;
/**
 * Ejecuta el script de despliegue del repositorio Node Main
 */
const deployNodeMain = async (repo) => {
    const deployCommand = `${REPO_SCRIPTS_PATH}restartServer.sh ${repo} ${process.env[repo]} ${process.env.LOG_FILE}`;
    try {
        logger_1.log.info({ title: 'GIT_HOOK_CI_CD_SERVICE_DEPLOY_NODE_MAIN', description: `Iniciando despliegue para ${repo}...` });
        const { stdout } = await execPromise(deployCommand);
        logger_1.log.info({ title: 'GIT_HOOK_CI_CD_SERVICE_DEPLOY_NODE_MAIN', description: `Despliegue exitoso para ${repo}: ${stdout}` });
        return stdout;
    }
    catch (error) {
        logger_1.log.error({ title: 'GIT_HOOK_CI_CD_SERVICE_DEPLOY_NODE_MAIN', description: `Error en despliegue de ${repo}: ${error.message}` });
        throw new Error("Error durante el despliegue.");
    }
};
exports.deployNodeMain = deployNodeMain;
//# sourceMappingURL=git.service.js.map