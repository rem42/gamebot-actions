import {GameLaunch} from "../interface/gameLaunch";
import {Bananalotto} from "bananalotto-client";

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
                    console.log('user');
                    if(user?.grid === undefined) {
                        return true;
                    }
                    console.log("Number of grid already played", user.grid);
                });
                // banane.playGrid();
            });

        return true;
    }
}
