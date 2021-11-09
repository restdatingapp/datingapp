import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { loginUser } from '../../Actions/UserActions';
import ReactDOM from 'react-dom';
import { IUser } from '../../Store/types';

export const Login:React.FC<any> = () => {

    const appState = useSelector<any,any>((state) => state);
    console.log(appState);

    const dispatch = useDispatch();

    const navigate = useNavigate();


        const [nickname, setnickname] = useState("");
        const [password, setPassword] = useState("");

        useEffect(() => {
            if(appState.user.id > 0){
                navigate('/home');
            }
        }, [appState]);

    const handleChange = (event: any) => {
        if(event.target.name === 'nickname'){
            setnickname(event.target.value);
        } else{
            setPassword(event.target.value);
        }

    }

    const login = async () =>{
        console.log("firing login async");
        await dispatch(
            loginUser({nickname, password})
        )
    }

    return (
        
    <div className="login">

            <div className="text-container">
                <h1 className="login-h1">Welcome to the REST Dating App!</h1>
                <h2>Sign in to experience passionate romance.</h2>
            </div>
            <form className="login-form">
            <div className="input-div">
            <h4 className="login-h4">Enter nickname</h4>
                    <input className="login-input" autoComplete="off" type="text" name="nickname"
                        placeholder="nickname" id="nickname" onChange={handleChange}/>
                        </div>
                        <div className="input-div">
                    <h4 className="login-h4">Enter Password</h4>
                    <input className="login-input" type="password" name="password"
                        placeholder="Password" id="password" onChange={handleChange}/>
                </div>
            </form>
            <button className="login-button" onClick = {login}>Login</button>
        </div>
    )
}
