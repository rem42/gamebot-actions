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
                    if(user instanceof User) {
                        let gridPlayed = user.grid ?? 10;
                        while (gridPlayed <= 10) {
                            banane.playGrid();
                            gridPlayed++;
                        }
                    }
                });
            });

        return true;
    }
}
