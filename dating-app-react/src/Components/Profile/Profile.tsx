import React, { useEffect, useState, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Store/store';
import { getDates } from '../../Actions/InterestedActions';
import restLogo from '../Signup/restLogo.png'
import { useNavigate, Link } from 'react-router-dom';
import { ImageUpload } from '../ImgUpload/ImgUpload';

import './Profile.css';
import { Navigate } from 'react-router';
import { UpdateUser } from '../../Actions/UserActions';
export const Profile: React.FC<any> = (props: any) => {

    const photoDefaultPath = "https://restdating.s3.us-west-1.amazonaws.com/";

    const dispatch = useDispatch();

    const id = useSelector<any, any>((state) => state.user.id);
    const storefirstname = useSelector<any, any>((state) => state.user.firstname);
    const storelastname = useSelector<any, any>((state) => state.user.lastname);
    const storeemail = useSelector<any, any>((state) => state.user.email);
    const storenickname = useSelector<any, any>((state) => state.user.nickname);
    const storepassword = useSelector<any, any>((state) => state.user.password);
    const storegender = useSelector<any, any>((state) => state.user.gender);
    const storeinterestedgender = useSelector<any, any>((state) => state.user.interestedgender);
    const storephotourl = useSelector<any, any>((state: any) => state.user.photourl);
    console.log(storephotourl);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(0);
    const [interestedgender, setInterestedgender] = useState(0);
    const [photourl, setphotourl] = useState("");

    useEffect(() => {
        console.log("Store updated!");
    }, [storephotourl]);

    const handleChange = (event: any) => {
        switch (event.target.name) {
            case "firstname":
                setFirstname(event.target.value);
                break;
            case "lastname":
                setLastname(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "nickname":
                setNickname(event.target.value);
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

    const update = async (e:any) => {
        e.preventDefault();
        console.log("firing login async");
        await dispatch(
            UpdateUser({ id, firstname, lastname, email, nickname, password})
        )
    }



    return (
        <>
        <img src = {restLogo} className='logo' />
            <div className="card">
                
                <div className="card__inner">
                
                    <div className="card__face card__face--front">
                    
                        <div className="card__header">
                            
                            <img src={photoDefaultPath + storephotourl} alt="" className="pp" />
                            <br />
                            <ImageUpload />
                            <br />
                            <form className='signup-form' onSubmit={update}>
                                <label>First Name: </label>
                                <input type='text' className='signupInput' placeholder={storefirstname} name='firstname' onChange={handleChange} required />
                                <br />
                                <label>Last Name: </label>
                                <input type='text' className='signupInput' placeholder={storelastname} name='lastname' onChange={handleChange} required />
                                <br />
                                <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type='text' className='signupInput' placeholder={storeemail} name='email' onChange={handleChange} required />
                                <br />
                                <label>Nickname:&nbsp;&nbsp;</label>
                                <input type='text' className='signupInput' placeholder={storenickname} name='nickname' onChange={handleChange} required />
                                <br />
                                <label>Password: &nbsp; </label>
                                <input type='password' className='signupInput' placeholder={storepassword} name='password' onChange={handleChange} required />
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