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
        const res = await axios.post('http://localhost:8080/user/dashboard', user)

        return dispatch({
            type: INTERESTED_USER,
            payload: res.data
        })
    }catch(e){
        console.log(e);
    }
}