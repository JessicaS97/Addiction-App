import React from "react"

class NavBar extends React.Component {
    render() {
        return(
            <header id="navbar">
                <nav>
                    <div></div>
                    <div><a href="/">LOGO</a></div>
                    <div>
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