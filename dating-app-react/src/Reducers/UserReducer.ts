import { IUser } from "../Store/types";
import { LOGIN_USER } from "../Actions/ActionTypes";

let initialState: IUser = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    nickname: '',
    password: '',
    gender: {id: 0, type: ''},
    interestedgender: {id: 0, type: ''}
};

type Action = {type: string, payload: IUser};

export const userReducer = (state: IUser = initialState, action:Action) => {

    switch(action.type){
        case LOGIN_USER:
            initialState = action.payload;
            console.log(initialState);
            return {
                ...initialState
            }
            default:
                return state;
    }
}
