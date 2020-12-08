import { readFile } from "fs-extra";
import { safeLoad } from "js-yaml";
import { join } from "path";
import {GamebotConfig} from "../interface/gamebotConfig";

let __config: GamebotConfig | undefined = undefined;
export const getConfig = async (): Promise<GamebotConfig> => {
    if (__config) return __config;
    const config = safeLoad(await readFile(join(".", ".gamebotrc.yml"), "utf8")) as GamebotConfig;
    __config = config;
    return config;
};
