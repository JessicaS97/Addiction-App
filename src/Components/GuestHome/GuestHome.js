import React from 'react'
import {Link} from 'react-router-dom'

import './GuestHome.css'

class GuestHome extends React.Component {
    render() {
        return(
            <div className="guest-home">
                <Link to="/"> 
                    <button href="/">Exit
                    </button>
                </Link>
            </div>
        )
    }
}

export default GuestHome