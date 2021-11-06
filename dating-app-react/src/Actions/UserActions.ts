import axios from 'axios';
import { RSA_NO_PADDING } from 'constants';
import { IUser } from '../Store/types';
import { LOGIN_USER } from './ActionTypes';

interface UserLogin{
    nickname: string,
    password: string
}

export const loginUser = (user:UserLogin) => async (dispatch:any) => {
    let loggedIn: IUser;

    try{
        console.log(user);
        const res = await axios.post('http://localhost:8080/user/login', user);
        console.log(res.data)

        loggedIn = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            nickname: res.data.nickname,
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
            nickname: '',
            password: ''
        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    }
}