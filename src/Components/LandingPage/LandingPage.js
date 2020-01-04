import React from "react"

import './LandingPage.css'

class LandingPage extends React.Component {
    render() {
        return(
            <div className="landingPage">
                <h1>Image here</h1>
                <p>QUOTE</p>
                <button>Register</button>
                <a href="/">Already have an account?</a>
            </div>
        )
    }
}

export default LandingPage