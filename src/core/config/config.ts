import * as dotenv from "dotenv";
import { ENVIRONMENT } from "../utils";

dotenv.config();

export const config = Object.freeze({
  app: {
    port: parseInt(process.env.PORT!),
    environment: {
      isInProduction: process.env.NODE_ENV === ENVIRONMENT.PROD,
      isInDevelopment: process.env.NODE_ENV === ENVIRONMENT.DEV,
      isInTesting: process.env.NODE_ENV === ENVIRONMENT.TEST,
    }
  },
  mail: {
    globalFrom:
      process.env.MAIL_FROM || ("ecx@gmail.com" as string), //TODO: fix ecx mail.
    smtpHost: "smtp.gmail.com",
    smtpPort: 465,
    smtpUsername: process.env.USER_EMAIL,
    smtpClientId: process.env.CLIENT_ID as string,
    smtpClientSecret: process.env.CLIENT_SECRET as string,
    smtpRefreshToken: process.env.REFRESH_TOKEN as string,
  },
  auth: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_SECRET_LIFE_SPAN as string,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET as string,
    refreshTokenExpiresIn: process.env.ACCESS_TOKEN_SECRET_LIFE_SPAN as string,
  },
  cache: {
    port: parseInt(process.env.REDIS_PORT!),
    host: process.env.REDIS_HOST,
    ttl: parseInt(process.env.REDIS_TTL!),
  },
  db: {
    mongodb: {

    },
    postgresql: {
    }
  },
  rateLimit: {
    limit: process.env.WINDOW_RATE_LIMIT,
  },
});
