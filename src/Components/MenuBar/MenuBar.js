import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'

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
                    <FontAwesomeIcon icon={faHome} size="3x" />
                    <FontAwesomeIcon icon={faUsers} size="3x" />
                    <FontAwesomeIcon icon={faHome} size="3x" />
                </div>
            </div>
        )
    }
}

export default MenuBar