import { combineReducers } from "redux";

import { interestedReducer } from "./InterestedReducer";
import { userReducer } from "./UserReducer";

export default combineReducers({
    user: userReducer,
    interested: interestedReducer
})

export const initialState = {
    active: false
}