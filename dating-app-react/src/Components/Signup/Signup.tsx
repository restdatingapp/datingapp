import React, { useState, useEffect } from 'react';
import restLogo from './restLogo.png';
import './Signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../../Actions/UserActions';
import { genderBuilder } from './GenderBuilder';
import { buildGender } from '../../Actions/UserActions';
import ReactDOM from 'react-dom';
import { IUser } from '../../Store/types';

export const Signup: React.FC<any> = () => {

    const appState = useSelector<any, any>((state) => state);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [genderid, setId] = useState(0);
    const [gendertype, setGender] = useState("")

    useEffect(() => {
        if (appState.user.id > 0) {
            navigate('home');
        }
    }, [appState]);

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
                console.log(gendertype);
                break;
        }
    }

    const signup = async (e: any) => {
        e.preventDefault();
        genderBuilder(gendertype);
        console.log("firing signup async");
        /*
        await dispatch(
            signupUser({ firstname, lastname, email, nickname, password, gender })
        )
        navigate('../login')
        */

    }


    return (
        <div className='signup'>
            <div className='logoDiv'>
                <img src={restLogo} className='logo' />
            </div>
            <div className='signupDiv'>
                <h3>Sign up for the REST Dating app!</h3>
                <form className='signup-form' onSubmit={signup}>
                    <label>First Name: </label>
                    <input type='text' className='signupInput' placeholder='Enter first name...' name='firstname' onChange={handleChange} required />
                    <br />
                    <label>Last Name: </label>
                    <input type='text' className='signupInput' placeholder='Enter last name...' name='lastname' onChange={handleChange} required />
                    <br />
                    <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type='text' className='signupInput' placeholder='Enter email...' name='email' onChange={handleChange} required />
                    <br />
                    <label>Nickname:&nbsp;&nbsp;</label>
                    <input type='text' className='signupInput' placeholder='Enter Nickname (username)' name='nickname' onChange={handleChange} required />
                    <br />
                    <label>Password: &nbsp; </label>
                    <input type='password' className='signupInput' placeholder='Enter password' name='password' onChange={handleChange} required />
                    <br />
                    <br />
                    <label>Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select name='gender' onChange={handleChange}>
                        <option value='male'>male</option>
                        <option value='female'>female</option>
                        <option value='non-binary'>non-binary</option>
                        <option value='doNotDisclose'>do not disclose</option>
                    </select>
                    <br />
                    <br />
                    <label>Interested in:</label>
                    <select name='interestedIn'>
                        <option value='male'>male</option>
                        <option value='female'>female</option>
                        <option value='both'>both</option>
                    </select>
                    <br />
                    <br />
                    <input type='submit' className='signupSubmit' value='submit' />
                </form>
            </div>
        </div>
    )
}