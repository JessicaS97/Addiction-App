import React from 'react'
import {Link} from 'react-router-dom'

class Confirm extends React.Component {

    reset = () => {
        const {step} = this.props
        this.setState({
            step: 1
        })
    }

    render() {
        const { prevStep, values } = this.props
        return(
            <div className="confirm">
                <h2>You are about to add the following:</h2>
                <h2>Addiction: {values.otherAddiction === '' ? values.addiction : values.otherAddiction}</h2>
                <h2>Starting Date: {values.startDate}</h2>
                <h2>Cost: ${values.savingCost}/day</h2>
                <h2>Time spent: {values.savingTime}h/day</h2>
                <h2>Motive: {values.motive}</h2>
                <Link to="/guest-home">
                    <button>Confirm</button>
                </Link>
                <button onClick={prevStep}>Back</button>
            </div>
        )
    }
}

export default Confirm