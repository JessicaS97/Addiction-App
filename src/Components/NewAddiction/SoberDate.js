import React from 'react'

class SoberDate extends React.Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        return(
            <div className="sober-date">
                <h1>SoberDate</h1>
                <button onClick={this.back}>Back</button>
                <button oncClick={this.next}>Next</button>
            </div>
        )
    }
}

export default SoberDate