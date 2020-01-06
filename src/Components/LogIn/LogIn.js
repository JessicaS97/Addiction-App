import React from 'react'

import './LogIn.css'

class LogIn extends React.Component {
    render() {
        return(
            <div className="login">
                <h1>Welcome Back</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="userName">
                        <label htmlFor="userName">User Name</label>
                        <input 
                                type="text" 
                                placeholder="User Name"
                                name="userName" 
                                noValidate
                            />
                    </div>
                    <div className="password">
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
        )
    }
}

export default LogIn