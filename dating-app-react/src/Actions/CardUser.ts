import {GET_Users} from './ActionTypes';

import axios from 'axios';

export const getUsers = () => async (dispatch:any) => {
    
    try{
        let res = await axios.get('');
        console.log(res.data);
        return dispatch({
            type: GET_Users,
            payload: res.data
        });
    } catch(e){
        console.log("uh oh");
        return dispatch({
            type: GET_Users,
            payload: []
        });
    }

}