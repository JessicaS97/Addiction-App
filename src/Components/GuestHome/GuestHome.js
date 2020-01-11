import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './GuestHome.css'
import MenuBar from './../MenuBar/MenuBar'

class GuestHome extends React.Component {
    render() {
        return(
            <div className="guest-home">
                <MenuBar />
                <h1>Guest Home</h1>
            </div>
        )
    }
}

export default GuestHome