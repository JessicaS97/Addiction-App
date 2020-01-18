import React, {useState} from 'react'
import uuid from 'uuid/v1'
import {Link} from 'react-router-dom'

import './AddictionList.css'

class AddictionList extends React.Component {

    clearStorage = e => {
        localStorage.clear()
        window.location.reload();
    }

    render() {
        const addictions = JSON.parse(localStorage.getItem('addictions'))
        return(
            <div className="addiction-item-list">
                <div className="addiction-list">
                    {addictions !== null && addictions.map(el => {
                        return(
                            <div className="addiction-grid">{el.addiction}</div>
                        )
                    })}
                </div>                
                <Link to="/new-addiction">
                    <button>+</button>
                </Link>
                <button onClick={this.clearStorage}>CLEAR ALL</button>
            </div>
        )
    }
}


export default AddictionList