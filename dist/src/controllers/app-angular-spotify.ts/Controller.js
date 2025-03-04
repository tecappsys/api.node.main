"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyToken = exports.ApiGet = void 0;
const tslib_1 = require("tslib");
const asyncHandler_1 = require("../../middlewares/core/asyncHandler");
const aux_response_1 = require("../../shared/core/utils/aux-response");
const spotify_service_1 = tslib_1.__importDefault(require("../../services/app-angular-spotify/spotify.service"));
exports.ApiGet = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    return (0, aux_response_1.successResponse)(res, "Get encontrado", "Éxito");
});
exports.SpotifyToken = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const token = await await spotify_service_1.default.getToken();
    return (0, aux_response_1.successResponse)(res, 'Token encontrado', token);
});
//# sourceMappingURL=Controller.js.map