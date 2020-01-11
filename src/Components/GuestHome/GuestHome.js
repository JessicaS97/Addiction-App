import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './GuestHome.css'
import MenuBar from './../MenuBar/MenuBar'
import Main from './../Main/Main'

class GuestHome extends React.Component {
    render() {
        return(
            <Router>
                <div className="guest-home">
                <MenuBar />
                <Route path="/guest-main" component={Main} />
            </div>
            </Router>
        )
    }
}

export default GuestHome