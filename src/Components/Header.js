import React from "react"
import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage'

class Header extends React.Component {
    render() {
        return(
            <div id="header">
                <NavBar />
                <LandingPage />
            </div>
        )
    }
}

export default Header