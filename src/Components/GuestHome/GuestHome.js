import React from 'react'

import './GuestHome.css'
import MenuBar from './../MenuBar/MenuBar'
import AddictionList from '../AddictionList/AddictionList'

function GuestHome() {
        return(
                <div className="guest-home">
                        <MenuBar />
                        <div className="all-addictions">
                            <h1>Addictions</h1>
                            <div className="addictions">
                                <br></br>
                                <AddictionList />
                            </div>
                        </div>
                </div>
        )
}

export default GuestHome