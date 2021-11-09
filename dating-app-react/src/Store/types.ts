export interface IUser{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    nickname: string,
    password: string
}

export type AppState = {
    user: IUser;
}