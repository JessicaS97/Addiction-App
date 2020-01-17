import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../../actions/postActions'


class Confirm extends React.Component {

    onClick = e => {
        const { values } = this.props

        const post = {
            addiction: values.addiction,
            date: values.startDate,
            savingCost: values.savingCost,
            savingTime: values.savingTime, 
            motive: values.motive
        }

        this.props.createPost(post)

    }

    render() {
        const { prevStep, values } = this.props
        return(
                <div className="confirm">
                <h2>You are about to add the following:</h2>
                <h2>Addiction: {values.otherAddiction === '' ? values.addiction : values.otherAddiction}</h2>
                <h2>Starting Date: {values.startDate}</h2>
                <h2>Cost: ${values.savingCost}/day</h2>
                <h2>Time spent: {values.savingTime}h/day</h2>
                <h2>Motive: {values.motive}</h2>
                <Link to="/guest-home">
                    <button onClick={this.onClick}>Confirm</button>
                </Link>
                <button onClick={prevStep}>Back</button>
            </div>
        )
    }
}

Confirm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Confirm)