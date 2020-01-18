import React from 'react'
import {Link} from 'react-router-dom'


class Confirm extends React.Component {

    onClick = e => {
        const {values} = this.props
        let existingEntries = JSON.parse(localStorage.getItem('addictions'))
        if (existingEntries === null) existingEntries = []
        localStorage.setItem('addictions', JSON.stringify(values))
        existingEntries.push(values)
        localStorage.setItem('addictions', JSON.stringify(existingEntries))
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
                    <button onClick={this.onClick}>Confirm</button>
                </Link>
                <button onClick={prevStep}>Back</button>
            </div>
        )
    }
}

export default Confirm