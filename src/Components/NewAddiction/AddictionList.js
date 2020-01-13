import React from 'react'

import './NewAddiction.css'

class AddictionList extends React.Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const{ values, handleChange } = this.props
        return(
            <div>
                <h1>Choose Addiction:</h1>
                <form className="addiction-form">
                <select>
                    <option>Alcohol</option>
                    <option>Caffeine</option>
                    <option>Gambling</option>
                    <option>Junk Food</option>
                    <option>Meet and Diary</option>
                    <option>Social Media</option>
                    <option>Sugar</option>
                    <option>Other</option>
                </select>
                    <label>
                        <span>Other</span>
                        <input type="radio"/>
                        <input type="text" name="other" value=""/>
                    </label>
                </form>
            </div>
        )
    }
}

export default AddictionList