export interface IUser{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    nickname: string,
    password: string,
    gender: object,
    interestedgender: object
}

export type AppState = {
    user: IUser;
}