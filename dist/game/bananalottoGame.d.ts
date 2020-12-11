import { GameLaunch } from "../interface/gameLaunch";
export declare class BananalottoGame implements GameLaunch {
    private email;
    private password;
    static NAME: string;
    constructor(email: string, password: string);
    launch(): Promise<boolean>;
}
