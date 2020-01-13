import React from 'react'

import './Motivation.css'
import MenuBar from './../MenuBar/MenuBar'
import quoteService from './../../quoteService'

class Motivation extends React.Component {
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
            <div>
                <MenuBar />
                <div className="motivation">
                    <h1>Motivation</h1>
                    <div className="quote-grid">
                        {this.state.quotes.length > 0 &&
                        this.state.quotes.map(
                        ({quote, questionId}) => <h2>{quote}</h2> 
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Motivation