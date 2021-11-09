import React, {useState, useEffect} from 'react';
import restLogo from './restLogo.png';
import './Signup.css';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { IUser } from '../../Store/types';

export const Signup:React.FC<any> = () => {

    const appState = useSelector<any, any>((state) => state);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName ] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setnickname] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (appState.user.id > 0) {
            navigate('home');
        }
    }, [appState]);

    return(
        <div className='signup'>
            <div className = 'logoDiv'>
                <img src={restLogo} className='logo'/>
            </div>
            <div className = 'signupDiv'>
            <h3>Sign up for the REST Dating app!</h3>
            <form className = 'signup-form'>
                <label>First Name: </label>
                <input type='text' className='signupInput' placeholder='Enter first name...' required  />
                <br />
                <label>Last Name: </label>
                <input type='text' className='signupInput' placeholder='Enter last name...' required />
                <br />
                <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='text' className='signupInput' placeholder='Enter email...' required />
                <br />
                <label>Nickname:&nbsp;&nbsp;</label>
                <input type='text' className='signupInput' placeholder='Enter Nickname (username)' required />
                <br />
                <label>Password: &nbsp; </label>
                <input type='password' className='signupInput' placeholder='Enter password' required />
                <br />
                <br />
                <label>Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select name='genderSelector'>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                    <option value='non-binary'>non-binary</option>
                    <option value='doNotDisclose'>do not disclose</option>
                </select>
                <br />
                <br />
                <label>Interested in:</label>
                <select name='interestedInSelector'>
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