export enum GameList {
    'bananalotto' = 'bananalotto'
}

export interface Game {
    type: GameList;
    email_secret: string;
    password_secret: string;
}
