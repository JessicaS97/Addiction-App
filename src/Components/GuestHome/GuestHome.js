import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './GuestHome.css'
import MenuBar from './../MenuBar/MenuBar'
import AddictionItem from './../AddictionItem/AddictionItem'

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