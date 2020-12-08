import { GameLaunch } from "../interface/gameLaunch";
export declare class Bananalotto implements GameLaunch {
    private email?;
    private password?;
    static NAME: string;
    constructor(email?: string | undefined, password?: string | undefined);
    launch(): Promise<boolean>;
}
