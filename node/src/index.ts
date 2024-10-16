import { startAppServer } from "./app";

export * from "./modules/config-manager";
startAppServer({
    port: 3333,
    staticFolder: null
})