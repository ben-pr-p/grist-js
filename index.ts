import { OpenAPI } from "./src/client";
import type { OpenAPIConfig } from "./src/client";
export * from "./src/client/schemas.gen";
export * from "./src/client/types.gen";
import * as methods from "./src/client/services.gen";

/**
 * Creates a client for interacting with the API.
 *
 * @param config - Configuration object for the client.
 * @param config.BASE - The base URL for API requests.
 * @param config.TOKEN - The authentication token for API requests.
 *
 * @returns An object containing all the API methods.
 *
 * This function modifies the global OpenAPI configuration.
 * Due to the use of global configuration, it's not possible to create
 * multiple clients with different configurations in the same context.
 * Creating a new client will override the configuration of any existing clients.
 */
export const createClient = (config: Pick<OpenAPIConfig, "BASE" | "TOKEN">) => {
  if (config.BASE) {
    OpenAPI.BASE = config.BASE;
  }
  if (config.TOKEN) {
    OpenAPI.TOKEN = config.TOKEN;
  }

  return methods;
};
