import React from 'react'

import './Support.css'
import MenuBar from './../MenuBar/MenuBar'

class Support extends React.Component {
    render() {
        return(
            <div className="support">
                <MenuBar />
                <h1>FAQs</h1>
                <h5>What is the idea of Addiction?</h5>
            </div>
        )
    }
}

export default Support