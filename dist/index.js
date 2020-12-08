"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core_1 = require("@actions/core");
const play_1 = require("./play");
const token = core_1.getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;
const SECRETS_CONTEXT = process.env.SECRETS_CONTEXT || "{}";
const allSecrets = JSON.parse(SECRETS_CONTEXT);
Object.keys(allSecrets).forEach((key) => {
    process.env[key] = allSecrets[key];
});
const run = async () => {
    if (!token)
        throw new Error("GitHub token not found");
    core_1.debug("Starting GameBot");
    switch (core_1.getInput("command")) {
        case "play":
            core_1.debug("Starting play");
            return play_1.play();
    }
};
exports.run = run;
exports.run()
    .then(() => { })
    .catch((error) => {
    console.error("ERROR", error);
    core_1.setFailed(error.message);
});
//# sourceMappingURL=index.js.map