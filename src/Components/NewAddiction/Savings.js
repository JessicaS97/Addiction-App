import React from 'react'

class Savings extends React.Component {
    render() {
        const {nextStep, prevStep, values, handleChange} = this.props
        return(
            <div className="savings">
                <h1>Savings</h1>
                <label>Please Enter $ spent on {values.otherAddiction === '' ? values.addiction : values.otherAddiction} a day
                    <input type="text" onChange={handleChange('savingCost')} value={values.savingCost}/>
                </label>
                <label>Please Enter time spent on {values.otherAddiction === '' ? values.addiction : values.otherAddiction} a day
                    <input type="text" onChange={handleChange('savingTime')} value={values.savingTime}/>
                </label>
                <button onClick={nextStep}>Next</button>
                <button onClick={prevStep}>Back</button>
            </div>
        )
    }
}

export default Savings