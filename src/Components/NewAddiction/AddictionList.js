import React from 'react'

import './NewAddiction.css'

class AddictionList extends React.Component {

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
                <select onChange={handleChange('addiction')}> 
                    <option value="alcohol">Alcohol</option>
                    <option value="caffeine">Caffeine</option>
                    <option>Gambling</option>
                    <option> Junk Food</option>
                    <option>Meat and Diary</option>>
                    <option>Social Media</option>
                    <option>Sugar</option>
                    <option>Other</option>
                </select>
                <label className="other" 
                style={{display: values.addiction === 'Other' ? 'block' : 'none'}}>
                    <input type="text" name="other" onChange={handleChange('otherAddiction')}/>
                </label>
                <button onClick={nextStep}>Next</button>
                </form>
            </div>
        )
    }
}

export default AddictionList