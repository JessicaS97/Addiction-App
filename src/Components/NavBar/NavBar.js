import React from "react"

import ToggleButton from '../SideBar/ToggleButton'
import './NavBar.css'
import logo from './logo.png'

class NavBar extends React.Component {
    render() {
        return(
            <header className="navbar">
                <div className="navbar-top"></div>
                <nav className="navbar-navigation">
                    <div className="navbar-toggle-button">
                        <ToggleButton click={this.props.clickHandler}/>
                    </div>
                    <div className="spacer"></div>
                    <div className="navbar-logo">
                        <a href="/"><img src={logo} alt="logo"></img></a>
                    </div>
                    <div className="spacer-right"></div>
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