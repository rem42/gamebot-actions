"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = void 0;
const config_1 = require("./helpers/config");
const bananalotto_1 = require("./game/bananalotto");
const play = async () => {
    let [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
    const config = await config_1.getConfig();
    for await (const game of config.games) {
        let currentGame;
        console.log('Game type:', game.type);
        switch (game.type) {
            case 'bananaloto':
                console.log('go in this');
                currentGame = new bananalotto_1.Bananalotto(process.env[game.email_secret], process.env[game.password_secret]);
                break;
        }
        if (currentGame === undefined) {
            console.log('currentGame === undefined');
            continue;
        }
        console.log('currentGame.launch();');
        currentGame.launch();
    }
};
exports.play = play;
//# sourceMappingURL=play.js.map