"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BananalottoGame = void 0;
const bananalotto_client_1 = require("bananalotto-client");
class BananalottoGame {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    async launch() {
        console.log('init game');
        await bananalotto_client_1.Bananalotto.init(this.email, this.password)
            .then(banane => {
            banane.userInformations().then(user => {
                if (user instanceof bananalotto_client_1.User) {
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
exports.BananalottoGame = BananalottoGame;
BananalottoGame.NAME = 'bananalotto';
//# sourceMappingURL=bananalottoGame.js.map