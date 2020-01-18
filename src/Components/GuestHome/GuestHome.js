import React from 'react'
import {Link} from 'react-router-dom'

import './GuestHome.css'
import MenuBar from './../MenuBar/MenuBar'
import AddictionList from '../AddictionList/AddictionList'

class GuestHome extends React.Component {
    render() {
        return(
            <div className="guest-home">
                <MenuBar />
                <div className="addictions-list">
                    <h1>Addictions</h1>
                    <div className="addictions">
                        <Link to="/new-addiction">
                            <button>+</button>
                        </Link>
                        <br></br>
                        <AddictionList />
                    </div>
                </div>
            </div>
        )
    }
}

export default GuestHome