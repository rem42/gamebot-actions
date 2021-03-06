"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = void 0;
var config_1 = require("./helpers/config");
var bananalottoGame_1 = require("./game/bananalottoGame");
var kingolotoGame_1 = require("./game/kingolotoGame");
var primolottoGame_1 = require("./game/primolottoGame");
var kingolotoAppGame_1 = require("./game/kingolotoAppGame");
var play = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, owner, repo, config, _b, _c, game, currentGame, e_1_1;
    var e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = (process.env.GITHUB_REPOSITORY || "").split("/"), owner = _a[0], repo = _a[1];
                return [4 /*yield*/, config_1.getConfig()];
            case 1:
                config = _e.sent();
                _e.label = 2;
            case 2:
                _e.trys.push([2, 8, 9, 14]);
                _b = __asyncValues(config.games);
                _e.label = 3;
            case 3: return [4 /*yield*/, _b.next()];
            case 4:
                if (!(_c = _e.sent(), !_c.done)) return [3 /*break*/, 7];
                game = _c.value;
                currentGame = void 0;
                console.log('Game type:', game.type);
                switch (game.type) {
                    case 'bananaloto':
                        console.log('go in this');
                        currentGame = new bananalottoGame_1.BananalottoGame(process.env[game.email_secret], process.env[game.password_secret]);
                        break;
                    case 'kingoloto':
                        console.log('go in this');
                        currentGame = new kingolotoGame_1.KingolotoGame(process.env[game.email_secret], process.env[game.password_secret]);
                        break;
                    case 'kingoloto-app':
                        console.log('go in this');
                        currentGame = new kingolotoAppGame_1.KingolotoAppGame(process.env[game.email_secret], process.env[game.password_secret]);
                        break;
                    case 'primolotto':
                        console.log('go in this');
                        currentGame = new primolottoGame_1.PrimolottoGame(process.env[game.email_secret], process.env[game.password_secret]);
                        break;
                }
                if (currentGame === undefined) {
                    console.log('currentGame === undefined');
                    return [3 /*break*/, 6];
                }
                console.log('currentGame.launch();');
                return [4 /*yield*/, currentGame.launch()];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6: return [3 /*break*/, 3];
            case 7: return [3 /*break*/, 14];
            case 8:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 9:
                _e.trys.push([9, , 12, 13]);
                if (!(_c && !_c.done && (_d = _b.return))) return [3 /*break*/, 11];
                return [4 /*yield*/, _d.call(_b)];
            case 10:
                _e.sent();
                _e.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 13: return [7 /*endfinally*/];
            case 14: return [2 /*return*/];
        }
    });
}); };
exports.play = play;
//# sourceMappingURL=play.js.map