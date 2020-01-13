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
                    <label>
                        <span>Alcohol</span>
                        <input type="radio" name="alcohol" value="Alcohol"/>
                    </label>
                    <label>
                        <span>Caffeine</span>
                        <input type="radio" name="caffeine" value="Caffeine"/>
                    </label>
                    <label>
                        <span>Gambling</span>
                        <input type="radio" name="gambling" value="Gambling"/>
                    </label>
                    <label>
                        <span>Junk Food</span>
                        <input type="radio" name="junk'food" value="Junk Food"/>
                    </label>
                    <label>
                        <span>Meat and Diary</span>
                        <input type="radio" name="meat-diary" value="Meat-Diary"/>
                    </label>
                    <label>
                        <span>Social Media</span>
                    <input type="radio" name="social-media" value="Social Media"/>
                    </label>
                    <label>
                        <span>Sugar</span>
                        <input type="radio" name="sugar" value="sugar"/> 
                    </label>
                    <label>
                        <span>Other</span>
                        <input type="radio" name="other" value="other"/>
                        <input type="text"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default AddictionList