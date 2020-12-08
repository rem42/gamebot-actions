import {getConfig} from "./helpers/config";
import {Bananalotto} from "./game/bananalotto";

export const play = async () => {
    let [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");

    const config = await getConfig();

    for await (const game of config.games) {
        let currentGame;
        console.log('Game type:', game.type);
        switch (game.type) {
            case 'bananaloto':
                console.log('go in this');
                currentGame = new Bananalotto(
                    process.env[game.email_secret],
                    process.env[game.password_secret]
                );
                break;
        }

        if(currentGame === undefined) {
            console.log('currentGame === undefined');
            continue;
        }
        console.log('currentGame.launch();');
        await currentGame.launch();
    }
}
