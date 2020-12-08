import {debug, getInput, setFailed} from "@actions/core";
import {play} from "./play";

const token = getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;
const SECRETS_CONTEXT = process.env.SECRETS_CONTEXT || "{}";
const allSecrets: Record<string, string> = JSON.parse(SECRETS_CONTEXT);
Object.keys(allSecrets).forEach((key) => {
    process.env[key] = allSecrets[key];
});

export const run = async () => {
    if (!token) throw new Error("GitHub token not found");

    debug("Starting GameBot");

    switch (getInput("command")) {
        case "play":
            debug("Starting play");
            return play();
    }
};

run()
    .then(() => {})
    .catch((error) => {
        console.error("ERROR", error);
        setFailed(error.message);
    });
