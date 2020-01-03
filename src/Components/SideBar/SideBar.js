import React from 'react'

import './SideBar.css'

class SideBar extends React.Component {
    render() {
        return(
            <nav className="sidebar">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideBar