import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../Actions/UserActions';
import './Login.css';
import restLogo from '../Signup/restLogo.png';
import ReactDOM from 'react-dom';
import { IUser } from '../../Store/types';

export const Login: React.FC<any> = () => {

    const appState = useSelector<any, any>((state) => state);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const [nickname, setnickname] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (appState.user.id > 0) {
            navigate('../home');
        }
    }, [appState]);

    const handleChange = (event: any) => {
        if (event.target.name === 'nickname') {
            setnickname(event.target.value);
        } else {
            setPassword(event.target.value);
        }

    }

    const login = async (e:any) => {
        e.preventDefault();
        console.log("firing login async");
        await dispatch(
            loginUser({ nickname, password })
        )
    }

    return (

        <div className="login">
            <div className='logoDiv'>
                <img src={restLogo} className='logo' />
            </div>

            <div className="loginDiv">
                <h3 className="login-h1">Welcome to the REST Dating App!</h3>
                <h4>Sign in to experience passionate romance.</h4>

                <form className="loginForm" onSubmit={login}>
                    <label>Enter nickname: </label>
                    <input className="loginInput" autoComplete="off" type="text" name="nickname"
                        placeholder="nickname" id="nickname" onChange={handleChange} />
                        <br />
                    <label>Enter Password: </label>
                    <input className="loginInput" type="password" name="password"
                        placeholder="Password" id="password" onChange={handleChange} />
                    <br />
                    <br />
                    <input className="loginSubmit" type="submit" name="loginSubmit" />
                </form>
            </div>
        </div>
    )
}
