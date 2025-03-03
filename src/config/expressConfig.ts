import express, { Application } from 'express';
import cors from 'cors';
import routes from '@routes/all-routes';
import { requestRateLimit } from '@core/utils/helpers';
import { errorHandler } from '@middlewares/core/errorHandler';

class expressConfig{
    constructor(server:Application){
        const app = server;

        // ✔ SI usas Express detrás de un proxy inverso (NGINX, Heroku, AWS, Cloudflare).
        app.set('trust proxy', 1);

        // Limiter to all requests
        app.use(requestRateLimit);
    
        // ✔ Elimina el encabezado X-Powered-By: Express
        app.disable('x-powered-by');

        // CORS
        app.use( cors() );

        // Sin esto, req.body sería undefined en solicitudes con Content-Type: application/json
        app.use( express.json() );

        // ROUTES
        app.use(routes);

        // Middleware global de manejo de errores
        app.use(errorHandler); 
    }
}

export default expressConfig;