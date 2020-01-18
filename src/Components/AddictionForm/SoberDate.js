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
        const {nextStep, prevStep, values, handleChange} = this.props
        return(
            <div className="sober-date">
                <h1>SoberDate</h1>
                <input type="date" onChange={handleChange('startDate')} value={values.startDate}></input>
                <button onClick={prevStep}>Back</button>
                <br></br>
                <button onClick={nextStep}>Next</button>
            </div>
        )
    }
}

export default SoberDate