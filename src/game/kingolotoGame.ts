import {GameLaunch} from "../interface/gameLaunch";
import {Kingoloto, User} from "kingoloto-client";

export class KingolotoGame implements GameLaunch {
    static NAME: string = 'kingoloto';

    constructor(
        private email: string,
        private password: string
    ) { }

    async launch(): Promise<boolean> {
        console.log('init game');

        const kingoloto = await Kingoloto.init(this.email, this.password);
        const user = await kingoloto.userInformations();
        let gridPlayed: number = user instanceof User ? user.grid as number : 10;

        while (gridPlayed < 10) {
            await kingoloto.playGrid();
            gridPlayed++;
        }

        return true;
    }
}
