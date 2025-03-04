import { Router } from 'express';
import { VerifyGitHook } from '../../middlewares/git-hook-ci-cd/verifyGitHook';
import { UpdateNodeMain, UpdateRepos } from '../../controllers/git-hook-ci-cd/Controller';

const routes = Router();

routes.post('/',VerifyGitHook,UpdateRepos);
routes.post('/app',VerifyGitHook,UpdateRepos);
routes.post('/node-main',VerifyGitHook,UpdateNodeMain);


export default routes;