import React from 'react'
import {Link} from 'react-router-dom'

import './LogIn.css'
import login from './login.png'

class LogIn extends React.Component {
    render() {
        return(
            <div className="login">
                <h1>Welcome Back</h1>
                <div className="login-img">
                    <img src={login} alt="avatar"></img>
                </div>
                <div className="spacer">
                </div>
                <div className="login-form">
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="username">
                            <label htmlFor="userName">User Name</label>
                            <input 
                                    type="text" 
                                    placeholder="User Name"
                                    name="userName" 
                                    noValidate
                                />
                        </div>
                        <div className="password-login">
                        <label htmlFor="password">Password</label>
                            <input 
                                    type="password" 
                                    placeholder="Password"
                                    name="password" 
                                    noValidate
                                />
                        </div>
                    </form>
                </div>
                <div className="signin">
                    <button type="submit">Sign In</button>
                    <br></br>
                    <Link to="/register">
                        <a href="/">Don't have an account?</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LogIn