export interface IUser{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    nickname: string,
    password: string,
    gender: object,
    interestedgender: object,
    photourl: string
}

export interface IInterested{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    nickname: string,
    password: string,
    description: string,
    gender: object,
    interestedgender: object
}

export type AppState = {
    user: any,
    interested: any
}