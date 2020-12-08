import { Game } from "./game";
export interface GamebotConfig {
    owner: string;
    repo: string;
    games: Game[];
}
