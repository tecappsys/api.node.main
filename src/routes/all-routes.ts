import { Router } from 'express';
import APP_ANGULAR_SPOTIFY_ROUTES  from '@routes/app-angular-spotify/routes';
import GIT_HOOK_CI_CD_ROUTES from '@routes/git-hook-ci-cd/routes';
import { PATHS as APP_ANGULAR_SPOTIFY_PATH} from '@shared/app-angular-spotify/enum/paths';
import { PATHS as GIT_HOOK_CI_CD_PATH} from '@shared/git-hook-ci-cd/enum/paths';

const router = Router();

// Define las rutas según los PATHS configurados en ROUTER_PATHS
router.use(APP_ANGULAR_SPOTIFY_PATH.API, APP_ANGULAR_SPOTIFY_ROUTES);
router.use(GIT_HOOK_CI_CD_PATH.API, GIT_HOOK_CI_CD_ROUTES);

export default router;