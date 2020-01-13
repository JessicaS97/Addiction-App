import React from 'react'

import './Community.css'
import MenuBar from './../MenuBar/MenuBar'

class Community extends React.Component {

    render() {
        return(
            <div className="community">
                <MenuBar />
                <h1>Community</h1>
            </div>
        )
    }
}

export default Community