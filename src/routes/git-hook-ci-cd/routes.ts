import { UpdateNodeMain, UpdateRepos } from '@controllers/git-hook-ci-cd/Controller';
import { VerifyGitHook } from '@middlewares/git-hook-ci-cd/verifyGitHook';
import { Router } from 'express';

const routes = Router();

routes.get('/',VerifyGitHook,UpdateRepos);
routes.get('/node-main',VerifyGitHook,UpdateNodeMain);


export default routes;