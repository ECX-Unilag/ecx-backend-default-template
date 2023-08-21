import { sendWelcomeGreetingsToECXMember } from "../../auth";
import { logger, config } from "../../core";


/**
 * Event Listener Registry.
 */
export const register = {
  "app:up": [
    () => logger.info(`Server started at port ${config.app.port} in ${config.app.environment.mode} environment`)
  ],
  "cache:connection:established": () => logger.info(`Cache connection established`),
  "auth:new:user": sendWelcomeGreetingsToECXMember.handle,
  "event:registration:successful": () =>
    logger.info("Events listeners registered"),
};
