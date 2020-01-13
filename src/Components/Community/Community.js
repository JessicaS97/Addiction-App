import React from 'react'

import './Community.css'
import MenuBar from './../MenuBar/MenuBar'
import quoteService from './../../quoteService'

class Community extends React.Component {
    state = {
        quotes: []
    }

    getQuote = () => {
        quoteService().then(quote => {
            this.setState({
                quotes: quote
            })
        })
    }

    componentDidMount() {
        this.getQuote()
    }

    render() {
        return(
            <div className="community">
                <MenuBar />
                <h1>Community</h1>
                {this.state.quotes.length > 0 &&
                this.state.quotes.map(
                ({quote, questionId}) => <h4>{quote}</h4> 
                )}
            </div>
        )
    }
}

export default Community