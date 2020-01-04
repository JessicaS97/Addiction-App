import React from 'react'

import './ToggleButton.css'

class ToggleButton extends React.Component {
    render() {
        return(
            <button className="toggle-button" onClick={this.props.click}>
                <div className="toggle-button-line"></div>
                <div className="toggle-button-line"></div>
                <div className="toggle-button-line"></div>
            </button>
        ) 
    }
}

export default ToggleButton