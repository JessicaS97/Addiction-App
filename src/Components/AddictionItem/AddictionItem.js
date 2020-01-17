import React from 'react'

import './AddictionItem.css'

class AddictionItem extends React.Component {

    render() {
        const postItems =this.props
        return(
            <div className="addiction-item-list">
                {postItems}
            </div>
        )
    }
}


export default AddictionItem