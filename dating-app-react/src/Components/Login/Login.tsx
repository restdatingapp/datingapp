import React from 'react';

export const Login:React.FC<any> = () => {



    return(
        <div className="login">
            <div className="text-container">
                <h1 className="login-h1">Welcome to the REST Dating App!</h1>
                <h2>Sign in to experience passionate romance.</h2>
            </div>
            <form className="login-form">
            <div className="input-div">
            <h4 className="login-h4">Enter Username</h4>
                    <input className="login-input" autoComplete="off" type="text" name="username"
                        placeholder="Username" id="username"/>
                        </div>
                        <div className="input-div">
                    <h4 className="login-h4">Enter Password</h4>
                    <input className="login-input" type="password" name="password"
                        placeholder="Password" id="password"/>
                </div>
            </form>
            <button className="login-button">Login</button>
        </div>
    )
}
