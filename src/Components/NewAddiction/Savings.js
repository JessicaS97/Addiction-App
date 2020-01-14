import React from 'react'

class Savings extends React.Component {
    render() {
        const {nextStep, prevStep, values, handleChange} = this.props
        return(
            <div className="savings">
                <h1>Savings</h1>
                <label>
                    <input name="savingCost" type="text" onChange={handleChange('savingCost')} value={values.savingCost === '' ? "savingCost" : values.savingCost}/>
                </label>
                <label>
                    <input name="savingTime" type="text" onChange={handleChange('savingTime')} value={values.savingTime}/>
                </label>
                <button onClick={nextStep}>Next</button>
                <button onClick={prevStep}>Back</button>
            </div>
        )
    }
}

export default Savings