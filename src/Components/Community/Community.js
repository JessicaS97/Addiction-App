import React from 'react'

import './Community.css'
import MenuBar from './../MenuBar/MenuBar'
import quoteService from './../../quotes'

class Community extends React.Component {
    state = {
        quotes: []
    }

    getQuote = () => {
        quoteService.then(quote => {
            this.setState({
                quotes: quote
            })
        })
    }

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