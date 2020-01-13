import React from 'react'

class AddictionList extends React.Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const{ values, handleChange } = this.props
        return(
            <div></div>
        )
    }
}

export default AddictionList