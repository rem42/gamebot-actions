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
                console.log('user');
                if (user?.grid === undefined) {
                    return true;
                }
                console.log("Number of grid already played", user.grid);
            });
            // banane.playGrid();
        });
        return true;
    }
}
exports.BananalottoGame = BananalottoGame;
BananalottoGame.NAME = 'bananalotto';
//# sourceMappingURL=bananalottoGame.js.map