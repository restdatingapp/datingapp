import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers/reducer';

import { AppState } from './types';

const initialState:AppState = {
    user: {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        nickname: "",
        password: "",
        gender: {id: 0, type: ''},
        interestedgender: {id: 0, type: ''},
        photourl: ''
    },
    interested : []
}

const middleWare = [thunk];

export const store = createStore(reducer, initialState, applyMiddleware(...middleWare));

