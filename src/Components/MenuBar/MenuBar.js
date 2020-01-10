import React from 'react'
import {Link} from 'react-router-dom'

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
                    
                </div>
            </div>
        )
    }
}

export default MenuBar