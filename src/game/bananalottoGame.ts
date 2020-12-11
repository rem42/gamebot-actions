import {GameLaunch} from "../interface/gameLaunch";
import {Bananalotto, User} from "bananalotto-client";

export class BananalottoGame implements GameLaunch {
    static NAME: string = 'bananalotto';

    constructor(
        private email: string,
        private password: string
    ) { }

    async launch(): Promise<boolean> {
        console.log('init game');

        await Bananalotto.init(this.email, this.password)
            .then(banane => {
                banane.userInformations().then(user => {
                    let gridPlayed: number = user instanceof User ? user.grid as number : 10;
                    console.log('gridPlayed', gridPlayed);
                    while (gridPlayed <= 10) {
                        banane.playGrid()
                            .then(response => true);
                        gridPlayed++;
                    }
                });
            });

        return true;
    }
}
