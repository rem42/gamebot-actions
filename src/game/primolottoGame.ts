import {GameLaunch} from "../interface/gameLaunch";
import {Primolotto} from "primolotto-client";

export class PrimolottoGame implements GameLaunch {
    static NAME: string = 'primolotto';

    constructor(
        private email: string,
        private password: string
    ) { }

    async launch(): Promise<boolean> {
        console.log('init game');

        const primolotto = await Primolotto.init(this.email, this.password);

        let canContinue = true;

        while (canContinue) {
            console.log("playGrid", "canContinue", canContinue);
            canContinue = await primolotto.playGrid();
        }

        canContinue = true;

        while (canContinue) {
            console.log("scratch", "canContinue", canContinue);
            canContinue = await primolotto.scratch();
        }

        return true;
    }
}
