import React from 'react'

import MenuBar from './../MenuBar/MenuBar'
import AddictionList from './AddictionList'
import SoberDate from './SoberDate'
import Savings from './Savings'
import Motive from './Motive'
import Confirm from './Confirm'

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
        switch(step) {
            case 1:
                return (
                    <MenuBar />
                )
            case 2:
                return <h1>SoberDate</h1>
            case 3:
                return <h1>Savings</h1>
            case 4:
                return <h1>Motive</h1>
            case 5:
                return <h1>Confirm</h1> 
            default:
        }
    }
}

export default NewAddiction