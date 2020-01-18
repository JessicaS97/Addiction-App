import React from 'react'

class Motive extends React.Component {
    render() {
        const {values, nextStep, prevStep, handleChange} = this.props
        return(
            <div className="motive">
                <h1>Motive</h1>
                <input type="text" onChange={handleChange('motive')} value={values.motive}/>
                <button onClick={nextStep}>Next</button>
                <button onClick={prevStep}>Back</button>
            </div>
        )
    }
}

export default Motive