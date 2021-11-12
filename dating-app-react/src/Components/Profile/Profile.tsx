import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Store/store';
import { getDates } from '../../Actions/InterestedActions';
import { useNavigate, Link } from 'react-router-dom'; 

import './Profile.css';
import { Navigate } from 'react-router';
export const Profile:React.FC<any>=(props:any)=>{

    const state = store.getState();
    
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const [id, setId] = useState(state.user.id);
    const [firstname, setFirstName] = useState(state.user.firstname);
    const [lastname, setLastName] = useState(state.user.lastname);
    const [email, setEmail] = useState(state.user.email);
    const [nickname, setNickname] = useState(state.user.nickname);
    const [password, setPassword] = useState(state.user.password);
    const [gender, setGender] = useState({id: state.user.gender});
    const [interestedGender, setInterestedgender] = useState({id: state.user.interestedgender});
   

    const interestedGenderId = parseInt(interestedGender.id.toString());
    let genderType:String = "";
    const defineType = (interestedGender:number) =>{
        if(interestedGender == 1){
            genderType = 'male'
        } else if(interestedGender == 2){
            genderType = 'female'
        } else if(interestedGender == 3){
            genderType = 'both'
        }
    }
    const deconstructedid = id;
    const deconstructedinterestedgender = interestedGender.id;
    const deconstructed = {
        id,
        interestedgender: {id: 2, type:genderType}
    }
    console.log(deconstructed);
    const dates = async () => {
        await dispatch(
            getDates(deconstructed)
        )
    }
    useEffect(() => {
        defineType(interestedGenderId);
        dates();
    },);

    
    const handleChange = (event: any) => {
        switch (event.target.name) {
            case "firstname":
                setFirstName(event.target.value);
                break;
            case "lastname":
                setLastName(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "nickname":
                setNickname(event.target.value);
                console.log(nickname);
                break;
            case "password":
                setPassword(event.target.value);
                break;
            case "gender":
                setGender(event.target.value);
                break;
            case "interestedIn":
                setInterestedgender(event.target.value);
                break;
        }
    }

    const updateUser = async (e: any) => {
        e.preventDefault();
        await dispatch(
            updateUser({ firstname, lastname, email, nickname, password, gender, interestedGender})
        );
        navigate('../dashboard');
    }


    
    return(
        <>
        <div className="card">
        <div className="card__inner">
            <div className="card__face card__face--front">
                <div className="card__header">
                        <img src="pp.jpg" alt="" className="pp" />
                        <form className='signup-form' onSubmit={updateUser}>
                <label>First Name: </label>
                <input type='text' className='signupInput' placeholder={firstname} name='firstname' value={firstname} onChange={handleChange} required />
                <br />
                <label>Last Name: </label>
                <input type='text' className='signupInput' placeholder='Enter last name...' name='lastname'   onChange={handleChange} required />
                <br />
                <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='text' className='signupInput' placeholder='Enter email...' name='email'  onChange={handleChange} required />
                <br />
                <label>Nickname:&nbsp;&nbsp;</label>
                <input type='text' className='signupInput' placeholder='Enter Nickname (username)' name='nickname'  onChange={handleChange} required />
                <br />
                <label>Password: &nbsp; </label>
                <input type='password' className='signupInput' placeholder='Enter password' name='password'  onChange={handleChange} required />
                <br />
                
                <br />

                <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                
                <br />
                <br />
                <label >Interested in: </label>
                <select name='interestedIn' onChange={handleChange}>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                    <option value='both'>both</option>
                </select>
                <br />
                <br />
                <input type='submit' className='profileSubmit' value='submit' />
            </form>
                    </div>
            </div>
            
        </div>
        </div>
        </>
    )
}