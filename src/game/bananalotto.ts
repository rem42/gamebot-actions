import {GameLaunch} from "../interface/gameLaunch";
import {BananalottoClient, Credentials} from "bananalotto-client";

export class Bananalotto implements GameLaunch {
    static NAME: string = 'bananalotto';

    constructor(
        private email?: string,
        private password?: string
    ) { }

    async launch(): Promise<boolean> {
        console.log('init game');
        const credential = new Credentials();
        credential.email = this.email;
        credential.password = this.password;

        console.log('init game');

        await BananalottoClient.init(credential)
            .then((client: BananalottoClient) => {
                console.log('BananalottoClient');
                return client.userInformation()
                    .then(user => {
                        console.log('user', user);
                        if(user.grid !== undefined) {
                            return true;
                        }
                        console.log("Number of grid already played", user.grid);
                        /*let i = user.grid ?? 0;
                        do {
                            client.fetchGrid()
                                .then(() => client.postGrid());
                        } while(i < 10);*/
                    });
            });

        return true;
    }
}
