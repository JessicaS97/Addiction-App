import React from 'react'

import './NewAddiction.css'

class AddictionList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedValue: ''
        }
    }

    handleSelect = e => {
        this.setState = ({ selectedValue: 'something' }, () => {
            console.log(this.state)
        })
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const{ values, handleChange } = this.props
        return(
            <div className="addiction-list">
                <h1>Choose Addiction:</h1>
                <form className="addiction-form" 
                    onChange={handleChange('addiction')} defaultValue={values.addiction}>
                <select onChange={this.handleSelect}> 
                    <option>Alcohol</option>
                    <option>Caffeine</option>
                    <option>Gambling</option>
                    <option> Junk Food</option>
                    <option>Meat and Diary</option>>
                    <option>Social Media</option>
                    <option>Sugar</option>
                    <option>Other</option>
                </select>
                <label className="other" style={{display: this.state.selectedValue === 'Other' ? 'block' : 'none'}}>
                    <input type="text" name="other" onChange={handleChange('addiction')}/>
                </label>
                <button onClick={this.continue}>Next</button>
                <h1>{this.state.addiction}</h1>
                </form>
            </div>
        )
    }
}

export default AddictionList