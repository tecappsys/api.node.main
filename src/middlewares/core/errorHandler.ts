import { serverErrorResponse } from '@shared/core/utils/aux-response';
import { Request, Response, NextFunction } from 'express';
import { log } from "@core/utils/logger";
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    log.info({title:'CORE_MIDDLEWARE_ERROR_HANDLER',description:`Error interno del servidor: ${error.stack}`});
    return serverErrorResponse(res, error, 'Error interno del servidor');
};
