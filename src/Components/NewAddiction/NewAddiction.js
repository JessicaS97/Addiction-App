import React from 'react'

import MenuBar from './../MenuBar/MenuBar'
import AddictionList from './AddictionList'
import SoberDate from './SoberDate'
import Savings from './Savings'
import Motive from './Motive'
import Confirm from './Confirm'
import { isThisTypeNode } from 'typescript'

class NewAddiction extends React.Component {
    state = {
        step: 1,
        addiction: '',
        startDate: '',
        savingCost: '',
        savingTime: '',
        motive: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state
        const {addiction, startDate, savingCost, savingTime, motive} = this.state
        const values = {addiction, startDate, savingCost, savingTime, motive}
        return(
            <div></div>
        )
    }
}

export default NewAddiction