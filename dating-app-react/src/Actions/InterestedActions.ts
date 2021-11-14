import axios from 'axios';
import { RSA_NO_PADDING } from 'constants';
import Reducers from '../Reducers/reducer';
import { IInterested } from '../Store/types';
import { INTERESTED_USER } from './ActionTypes';
import { interestedReducer } from '../Reducers/InterestedReducer';

interface getInterested{
    id: number,
    interestedgender: object
}

export const getDates = (user:getInterested) => async (dispatch:any) => {
    let interested: IInterested;

    try{
        const res = await axios.post('http://ec2-54-177-228-183.us-west-1.compute.amazonaws.com:8080/user/dashboard', user)
        console.log(res.data);

        return dispatch({
            type: INTERESTED_USER,
            payload: res.data
        })
    }catch(e){
        console.log(e);
    }
}