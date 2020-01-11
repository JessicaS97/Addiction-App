import React from 'react'

import './Motivation.css'
import MenuBar from './../MenuBar/MenuBar'

class Motivation extends React.Component {
    render() {
        return(
            <div className="motivation">
                <MenuBar />
                <h1>Motivation</h1>
            </div>
        )
    }
}

export default Motivation