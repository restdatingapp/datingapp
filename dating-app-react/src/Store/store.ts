import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers';

import { AppState } from './types';

const initialState:AppState = {
    user: {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
    }
}