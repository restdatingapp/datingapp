import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { IUser } from '../../Store/types';

export const Login:React.FC<{text: string}> = ({text}) => {
    console.log("checking to see if this functional component works");

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`The name you entered was: ${username}`);
        alert(`The password you entered was: ${password}`);
    }

    return (
        
    <div className="login">
    <span>{text}</span>

            <div className="text-container">
                <h1 className="login-h1">Welcome to the REST Dating App!</h1>
                <h2>Sign in to experience passionate romance.</h2>
            </div>
            <form className="login-form">
            <div className="input-div">
            <h4 className="login-h4">Enter Username</h4>
                    <input className="login-input" autoComplete="off" type="text" name="username"
                        placeholder="Username" id="username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="input-div">
                    <h4 className="login-h4">Enter Password</h4>
                    <input className="login-input" type="password" name="password"
                        placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
            <button className="login-button" onClick = {handleSubmit}>Login</button>
        </div>
    )
}
