import React from 'react'
import {Link} from 'react-router-dom'

import './Register.css'
import users from './register.png'

class Register extends React.Component {
    render() {
        return(
            <div className="register">
                <div className="register-img">
                    <img src={users} alt="users"></img>
                </div>
                <div className="spacer">
                </div>
                <div className="register-form">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="firstName">
                            <label>First Name</label>
                            <input 
                                type="text" 
                                placeholder="First Name"
                                name="firstname" 
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="userName">
                            <label>User Name</label>
                            <input 
                                type="text" 
                                placeholder="User Name"
                                name="username" 
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input 
                                type="text" 
                                placeholder="Password"
                                name="password" 
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <br></br>
                            <Link to="/login">
                                <a href="/">Already have an account?</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register