import React from 'react'

import './SideBar.css'

class SideBar extends React.Component {
    render() {

        let sideClasses = 'sidebar'

        if (this.props.show) {
            sideClasses = 'sidebar open'
        }

        return(
            <nav className={sideClasses}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideBar