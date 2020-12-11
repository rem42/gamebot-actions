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

        const bananalotto = await Bananalotto.init(this.email, this.password);
        const user = await bananalotto.userInformations();
        let gridPlayed: number = user instanceof User ? user.grid as number : 10;

        while (gridPlayed < 10) {
            await bananalotto.playGrid();
            gridPlayed++;
        }

        return true;
    }
}
