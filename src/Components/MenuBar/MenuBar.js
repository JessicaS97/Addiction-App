import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faFire, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import './MenuBar.css'

class MenuBar extends React.Component {
    render() {
        return(
           <div className="menu">
            <div className="menubar-button">
                <Link to="/"> 
                    <button href="/">Log Out</button>
                </Link>         
            </div>               
            <div className="menubar">
                <ul>
                    <Link to="/main">
                        <li><a href="/"><FontAwesomeIcon icon={faHome} size="2x" /></a></li>
                    </Link>
                    <li><a href="/"><FontAwesomeIcon icon={faUsers} size="2x" /></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faFire} size="2x" /></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faQuestionCircle} size="2x" /></a></li>
                </ul>
            </div>
        </div>
        )
    }
}

export default MenuBar