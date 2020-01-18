import React from 'react'

import './NewAddiction.css'

class AddictionOptions extends React.Component {

    handleSelect = e => {
        e.preventDefault()
        this.setState = ({ 
            selectedValue: e.target.value
        })
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const{ nextStep, values, handleChange } = this.props
        return(
            <div className="addiction-list">
                <h1>Choose Addiction:</h1>
                <form className="addiction-form">
                <select onChange={handleChange('addiction')} value={values.addiction}> 
                    <option value="">Select An Addiction</option>
                    <option value="Alcohol">Alcohol</option>
                    <option value="Caffeine">Caffeine</option>
                    <option value="Gambling">Gambling</option>
                    <option value="Junk Food">Junk Food</option>
                    <option value="Meat and Diary">Meat and Diary</option>>
                    <option value="Social Media">Social Media</option>
                    <option value="Sugar">Sugar</option>
                    <option>Other</option>
                </select>
                <label className="other" 
                style={{display: values.addiction === 'Other' ? 'block' : 'none'}}>
                    <input type="text" name="other" onChange={handleChange('otherAddiction')} value={values.otherAddiction}/>
                </label>
                <button onClick={nextStep}>Next</button>
                </form>
            </div>
        )
    }
}

export default AddictionOptions