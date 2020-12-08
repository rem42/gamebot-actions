"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bananalotto = void 0;
const bananalotto_client_1 = require("bananalotto-client");
class Bananalotto {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    async launch() {
        console.log('init game');
        const credential = new bananalotto_client_1.Credentials();
        credential.email = this.email;
        credential.password = this.password;
        console.log('init game');
        await bananalotto_client_1.BananalottoClient.init(credential)
            .then((client) => {
            console.log('BananalottoClient');
            return client.userInformation()
                .then(user => {
                console.log('user', user);
                if (user.grid !== undefined) {
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
exports.Bananalotto = Bananalotto;
Bananalotto.NAME = 'bananalotto';
//# sourceMappingURL=bananalotto.js.map