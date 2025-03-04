import { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/core/asyncHandler";
import { successResponse } from "../../shared/core/utils/aux-response";
import spotifyService from "../../services/app-angular-spotify/spotify.service";

export const ApiGet = asyncHandler(async (req: Request, res: Response) => {
    return successResponse(res, "Get encontrado", "Éxito");
});

export const SpotifyToken = asyncHandler(async(req:Request,res:Response) => {
    const token = await await spotifyService.getToken();
    return successResponse(res, 'Token encontrado', token);
});

