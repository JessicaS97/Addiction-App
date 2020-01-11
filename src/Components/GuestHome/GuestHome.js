import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './GuestHome.css'
import MenuBar from './../MenuBar/MenuBar'
import Main from './../Main/Main'

class GuestHome extends React.Component {
    render() {
        return(

                <div className="guest-home">
                <MenuBar />

            </div>
        )
    }
}

export default GuestHome