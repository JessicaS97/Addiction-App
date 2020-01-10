import React from 'react'
import {Link} from 'react-router-dom'

import './Register.css'
import users from './register.png'
import Header from './../Header'

const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


const validForm = ({formErrors, ...rest}) => {
    let valid = true
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    })
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    })
    return valid
}

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: null,
            userName: null,
            email: null, 
            password: null,
            formErrors: {
                firstName: "",
                userName: "",
                email: "", 
                password: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if (validForm(this.state)) {
            console.log(this.state)
        } else {
            console.log("invalid")
        }
    }

    handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        let formErrors = {...this.state.formErrors}

        switch(name) {
            case 'firstName':
                formErrors.firstName = value.length < 3
                ? "minimum 3 characters required"
                : "";
                break
            case 'userName':
                formErrors.userName = value.length < 3
                ? "minimum 3 characters required"
                : "";
                break
            case 'email':
            formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
                break
            case 'password':
            formErrors.password = value.length < 3
            ? "minimum 3 characters required"
            : "";
                break
            default:
                break
        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state))
    }

    render() {

        const {formErrors} = this.state

        return(
            <div>
                <Header />
                <div className="register">
                <div className="register-img">
                    <img src={users} alt="users"></img>
                </div>
                <div className="spacer">
                </div>
                <div className="register-form">
                    <h1>Create Account</h1>
                    <form action="#" method="POST">
                        <div className="firstName">
                            <label>First Name</label>
                            <input 
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                type="text" 
                                placeholder="First Name"
                                name="firstName" 
                                noValidate
                                onChange={this.handleChange}
                                required
                                value={this.state.firstName}
                            />
                            {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="userName">
                            <label>User Name</label>
                            <input 
                            className={formErrors.userName.length > 0 ? "error" : null}
                                type="text" 
                                placeholder="User Name"
                                name="userName" 
                                noValidate
                                onChange={this.handleChange}
                                required
                                value={this.state.userName}
                            />
                            {formErrors.userName.length > 0 && (
                            <span className="errorMessage">{formErrors.userName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label>Email</label>
                            <input 
                                className={formErrors.email.length > 0 ? "error" : null}
                                type="text" 
                                placeholder="Email"
                                name="email" 
                                noValidate
                                onChange={this.handleChange}
                                required
                                value={this.state.email}
                            />
                            {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input 
                                className={formErrors.password.length > 0 ? "error" : null}
                                type="password" 
                                placeholder="Password"
                                name="password" 
                                noValidate
                                onChange={this.handleChange}
                                required
                            />
                            {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit" onClick={e=> this.handleSubmit(e)}  value=
                            "Submit">Create Account</button>
                            <br></br>
                            <Link to="/login">
                                <a href="/">Already have an account?</a>
                            </Link>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Register