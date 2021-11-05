import axios from 'axios';
import { RSA_NO_PADDING } from 'constants';
import { IUser } from '../Store/types';
import { LOGIN_USER } from './ActionTypes';

interface UserLogin{
    username: string,
    password: string
}

export const loginUser = (user:UserLogin) => async (dispatch:any) => {
    let loggedIn: IUser;

    try{
        const res = await axios.post('', user);
        console.log(res.data)

        loggedIn = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            username: res.data.username,
            password: res.data.password

        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    } catch(e){
        console.log(e);

        loggedIn = {
            id: -1,
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: ''
        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    }
}