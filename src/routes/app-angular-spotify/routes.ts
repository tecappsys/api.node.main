import { Router } from 'express';
import { SpotifyToken, ApiGet } from '@controllers/app-angular-spotify.ts/Controller';

const routes = Router();

routes.get('/',ApiGet);
routes.get('/spotify/token',SpotifyToken);


export default routes;