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

    continue = e => {
        e.preventDefault()
        alert('Please enter a starting sober date')
    }

    render() {
        const {nextStep, prevStep, values, handleChange} = this.props
        return(
            <div className="sober-date">
                <h1>SoberDate</h1>
                <input type="datetime-local" onChange={handleChange('startDate')} value={values.startDate}></input>
                <button onClick={prevStep}>Back</button>
                <br></br>
                <button onClick={values.startDate === "" ? this.continue : nextStep}>Next</button>
            </div>
        )
    }
}

export default SoberDate