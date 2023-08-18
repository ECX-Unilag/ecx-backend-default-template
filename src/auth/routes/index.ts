import { Router } from "express";  
import { authRateLimiter } from "../../core";

export const authRouter = Router();


authRouter
    .use(authRateLimiter)
