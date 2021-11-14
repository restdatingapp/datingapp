import axios from 'axios';
import { RSA_NO_PADDING } from 'constants';
import Reducers from '../Reducers/reducer';
import { IUser } from '../Store/types';
import { LOGIN_USER, PHOTO_UPLOAD } from './ActionTypes';
import { UPDATE_USER } from './ActionTypes';
import {userReducer} from '../Reducers/UserReducer';

interface UserLogin{
    nickname: string,
    password: string
}

interface UserSignup{
    firstname: string,
    lastname: string,
    email: string,
    nickname: string,
    password: string
    gender: object,
    interestedgender: object;
    photourl: string
}

interface UserUpdate{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    nickname: string,
    password: string,
}


export const photoUser = (user:IUser) => async (dispatch:any) =>{
    let updated: IUser;
    try{   
        const res = await axios.post('http://ec2-54-177-228-183.us-west-1.compute.amazonaws.com:8080/user/updatephoto', user);

        updated = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            nickname: res.data.nickname,
            password: res.data.password,
            gender: res.data.gender.id,
            interestedgender: res.data.interestedgender.id,
            photourl: res.data.photourl
        }

    return dispatch({
        type: PHOTO_UPLOAD,
        payload: user
    });

    console.log(res.data);
    } catch(e){
        console.log(e);
    }
}


export const loginUser = (user:UserLogin) => async (dispatch:any) => {
    let loggedIn: IUser;

    try{
        const res = await axios.post('http://ec2-54-177-228-183.us-west-1.compute.amazonaws.com:8080/user/login', user);
        console.log(res.data)

        loggedIn = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            nickname: res.data.nickname,
            password: res.data.password,
            gender: res.data.gender.id,
            interestedgender: res.data.interestedgender.id,
            photourl: res.data.photourl
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
            password: '',
            gender: {id: 0, type: ''},
            interestedgender: {id: 0, type: ''},
            photourl: ''
        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    }
}

export const signupUser = (user:UserSignup) => async () => {


    try{
        console.log(user);
        const res = await axios.post('http://ec2-54-177-228-183.us-west-1.compute.amazonaws.com:8080/user/create', user);
        console.log(res.data);

    } catch(e){
        console.log(e);
    }

}

export const UpdateUser = (user:UserUpdate) => async (dispatch:any) => {
    let updated: IUser;
    try{   
        const res = await axios.post('http://ec2-54-177-228-183.us-west-1.compute.amazonaws.com:8080/user/update', user);

        updated = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            nickname: res.data.nickname,
            password: res.data.password,
            gender: res.data.gender.id,
            interestedgender: res.data.interestedgender.id,
            photourl: res.data.photourl
        }

        return dispatch({
            type: UPDATE_USER,
            payload: updated
        })

        console.log(res.data);
    } catch(e){
        console.log(e);
    }
}
