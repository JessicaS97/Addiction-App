import React from 'react'
import {Link} from 'react-router-dom';

import './AddictionItem.css'

class AddictionItem extends React.Component {
    componentWillMount() {
        console.log(123)
    }

    render() {
        return(
            <div className="addiction-item">
                <h1>Posts</h1>
            </div>
        )
    }
}

export default AddictionItem