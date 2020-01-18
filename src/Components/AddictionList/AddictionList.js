import React, {useState} from 'react'
import uuid from 'uuid/v1'
import {Link} from 'react-router-dom'

import './AddictionList.css'

class AddictionList extends React.Component {

    render() {
        const addictions = JSON.parse(localStorage.getItem('addictions'))
        return(
            <div className="addiction-item-list">
                <h1>Addiction List</h1>
                <ul>
                    {addictions.map(el => {
                        return(
                            <li>{el.addiction}</li>
                        )
                    })}
                </ul>
                <Link to="/new-addiction">
                    <button>+</button>
                </Link>
            </div>
        )
    }
}


export default AddictionList