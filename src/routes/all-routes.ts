import { Router } from 'express';
import APP_ANGULAR_SPOTIFY_ROUTES  from './app-angular-spotify/routes';
import GIT_HOOK_CI_CD_ROUTES from './git-hook-ci-cd/routes';
import { PATHS as APP_ANGULAR_SPOTIFY_PATH} from '../shared/app-angular-spotify/enum/paths';
import { PATHS as GIT_HOOK_CI_CD_PATH} from '../shared/git-hook-ci-cd/enum/paths';

const routes = Router();

// Define las rutas según los PATHS configurados en ROUTER_PATHS
routes.use(APP_ANGULAR_SPOTIFY_PATH.API, APP_ANGULAR_SPOTIFY_ROUTES);
routes.use(GIT_HOOK_CI_CD_PATH.API, GIT_HOOK_CI_CD_ROUTES);

export default routes;