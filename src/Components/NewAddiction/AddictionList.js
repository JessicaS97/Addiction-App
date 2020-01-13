import React from 'react'

import './NewAddiction.css'

class AddictionList extends React.Component {

    handleSelect = e => {
        console.log(this.props.values.addiction)
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const{ values, handleChange } = this.props
        return(
            <div>
                <h1>Choose Addiction:</h1>
                <form className="addiction-form" 
                    onChange={handleChange('addiction')} defaultValue={values.addiction}>
                <select onChange={this.handleSelect}> 
                    <option value="Alcohol">Alcohol</option>
                    <option value="Caffeine">Caffeine</option>
                    <option value="Gambling">Gambling</option>
                    <option value="Junk Food"> Junk Food</option>
                    <option value="Meat and Diary">Meat and Diary</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Sugar">Sugar</option>
                    <option>Other</option>
                </select>
                <label className="other" style={{display: values.addiction==='Other' ? 'block' : ''}}>
                    <input type="text" name="other"/>
                </label>
                <button onClick={this.continue}>Next</button>
                </form>
            </div>
        )
    }
}

export default AddictionList