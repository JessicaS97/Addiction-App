import React from 'react'
import {Link} from 'react-router-dom'

import './GuestHome.css'
import MenuBar from './../MenuBar/MenuBar'
import AddictionItem from './../AddictionItem/AddictionItem'
import store from './../../store'

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
                        <AddictionItem />
                    </div>
                </div>
            </div>
        )
    }
}

export default GuestHome