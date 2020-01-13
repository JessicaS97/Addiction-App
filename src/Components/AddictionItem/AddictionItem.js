import React from 'react'
import {Link} from 'react-router-dom';

import './AddictionItem.css'

class AddictionItem extends React.Component {

    clicked = () => {
        alert('clicked')
    }

    render() {
        return(
            <div className="addiction-item" onClick={this.clicked()}>
                <h1>Coffee</h1>
            </div>
        )
    }
}

export default AddictionItem