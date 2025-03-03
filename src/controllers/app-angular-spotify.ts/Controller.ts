import { Request, Response } from "express";
import { successResponse } from "@shared/core/utils/aux-response";
import { asyncHandler } from "@middlewares/core/asyncHandler";
import SpotifyService from "src/services/app-angular-spotify/spotify.service";

export const ApiGet = asyncHandler(async (req: Request, res: Response) => {
    return successResponse(res, "Get encontrado", "Éxito");
});

export const SpotifyToken = asyncHandler(async(req:Request,res:Response) => {
    const token = await await SpotifyService.getToken();
    return successResponse(res, 'Token encontrado', token);
});

