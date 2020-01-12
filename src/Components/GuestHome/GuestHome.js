import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
                        <AddictionItem />
                        <AddictionItem />
                        <AddictionItem />
                    </div>
                </div>
            </div>
        )
    }
}

export default GuestHome