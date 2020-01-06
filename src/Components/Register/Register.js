import React from 'react'
import {Link} from 'react-router-dom'

import './Register.css'
import users from './register.png'

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
            console.log("valid")
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
            <div className="register">
                <div className="register-img">
                    <img src={users} alt="users"></img>
                </div>
                <div className="spacer">
                </div>
                <div className="register-form">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                type="text" 
                                placeholder="First Name"
                                name="firstName" 
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="userName">
                            <label>User Name</label>
                            <input 
                                type="text" 
                                placeholder="User Name"
                                name="userName" 
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.userName.length > 0 && (
                            <span className="errorMessage">{formErrors.userName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder="Email"
                                name="email" 
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="Password"
                                name="password" 
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                            )}
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