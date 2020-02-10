import React, { Component } from 'react'

class SpendingsDetails extends Component {
    render() {
        return(
            <div className="spendings-details">
                <h2>Spendings Details</h2>
                <div className="spending-money">
                    <h4>Money</h4>
                    <h2>`$ ${}`</h2>
                </div>
                <div className="spending-time">
                    <h4>Time</h4>
                    <h2>`${}`</h2>
                </div>
            </div>
        )
    }
}

export default SpendingsDetails