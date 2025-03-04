"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const logger_1 = require("../../shared/core/utils/logger");
class AppAngularSpotifyService {
    constructor() {
        this.token = null;
        this.tokenExpiration = null;
        this.API_SPOTIFY = process.env.API_SPOTIFY;
        this.API_SPOTIFY_CLIENT_ID = process.env.API_SPOTIFY_CLIENT_ID;
        this.API_SPOTIFY_CLIENT_SECRET = process.env.API_SPOTIFY_CLIENT_SECRET;
        this.header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    }
    static getInstance() {
        if (!AppAngularSpotifyService.instance) {
            AppAngularSpotifyService.instance = new AppAngularSpotifyService();
        }
        return AppAngularSpotifyService.instance;
    }
    /**
     * Obtiene el token de autenticación de Spotify y lo almacena en caché.
     */
    async getToken() {
        try {
            if (this.token && this.tokenExpiration && Date.now() < this.tokenExpiration) {
                logger_1.log.info({ title: 'APP_ANGULAR_SPOTIFY_SERVICE_GET_TOKEN', description: "Reutilizando token de Spotify." });
                return this.token;
            }
            const url = `${this.API_SPOTIFY}/token`;
            const payload = new URLSearchParams();
            payload.append("grant_type", "client_credentials");
            payload.append("client_id", this.API_SPOTIFY_CLIENT_ID);
            payload.append("client_secret", this.API_SPOTIFY_CLIENT_SECRET);
            const response = await axios_1.default.post(url, payload, this.header);
            this.token = response.data.access_token;
            this.tokenExpiration = Date.now() + response.data.expires_in * 1000;
            logger_1.log.info({ title: 'APP_ANGULAR_SPOTIFY_SERVICE_GET_TOKEN', description: "Nuevo token de Spotify obtenido." });
            return this.token;
        }
        catch (error) {
            logger_1.log.error({ title: 'APP_ANGULAR_SPOTIFY_SERVICE_GET_TOKEN', description: `Error al obtener token: ${error.response?.data || error.message}` });
            throw new Error("Error al obtener token de Spotify");
        }
    }
    /**
     * Busca canciones en Spotify.
     */
    async searchTracks(query) {
        try {
            const token = await this.getToken();
            const url = `${this.API_SPOTIFY}/v1/search?q=${encodeURIComponent(query)}&type=track`;
            const response = await axios_1.default.get(url, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        }
        catch (error) {
            logger_1.log.error({ title: 'APP_ANGULAR_SPOTIFY_SERVICE_SEARCH_TRACK', description: `Error en búsqueda de canciones: ${error.response?.data || error.message}` });
            throw new Error("Error en búsqueda de canciones");
        }
    }
}
exports.default = AppAngularSpotifyService.getInstance();
//# sourceMappingURL=spotify.service.js.map