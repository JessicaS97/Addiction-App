import React from "react"
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <header className="navbar">
                <div className="navbar-top"></div>
                <nav className="navbar-navigation">
                    <div></div>
                    <div className="navbar-logo">
                        <a href="/"><img src="logo.png" alt="logo"></img></a>
                    </div>
                    <div className="navbar-items">
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar