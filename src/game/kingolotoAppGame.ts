import {GameLaunch} from "../interface/gameLaunch";
import {KingolotoApp} from "kingoloto-app-client";

export class KingolotoAppGame implements GameLaunch {
    static NAME: string = 'kingoloto-app';

    constructor(
        private email: string,
        private password: string
    ) { }

    async launch(): Promise<boolean> {
        console.log('init game');

        const kingolotoApp = await KingolotoApp.init(this.email, this.password);
        let canContinue = true;

        while (canContinue) {
            canContinue = await kingolotoApp.playGrid();
        }

        return true;
    }
}
