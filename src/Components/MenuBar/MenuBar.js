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
                        <button href="/">Exit
                        </button>
                    </Link>         
                </div>               
                <div className="menubar">
                    <ul>
                        <li><FontAwesomeIcon icon={faHome} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faUsers} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faFire} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faQuestionCircle} size="2x" /></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuBar