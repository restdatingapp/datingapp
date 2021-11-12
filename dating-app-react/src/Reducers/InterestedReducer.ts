import {IInterested} from "../Store/types";
import {INTERESTED_USER} from "../Actions/ActionTypes";
let initialState: IInterested[] = [];

type Action = {type: string, payload: IInterested};

export const interestedReducer = (state: any = initialState, action:Action) => {

    
    switch(action.type){
        case INTERESTED_USER:
            return action.payload;
        default:
            return state;
    }
    
}
