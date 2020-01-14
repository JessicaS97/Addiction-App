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
        motive: '',
        otherAddiction: ''
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
        const {addiction, startDate, savingCost, savingTime, motive, otherAddiction} = this.state
        const values = {addiction, startDate, savingCost, savingTime, motive, otherAddiction}
        switch(step) {
            case 1:
                return(
                    <div>
                        <MenuBar />
                        <AddictionList 
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )

            case 2:
                return(
                    <div>
                        <MenuBar />
                        <SoberDate 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 3:
                return(
                    <div>
                        <MenuBar />
                        <Savings
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 4:
                return(
                    <div>
                        <MenuBar />
                        <Motive 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 5:
                return(
                    <div>
                        <MenuBar />
                        <Confirm />
                    </div>
                )
            default: return(
                <div></div>
            )
        }
    }
}

export default NewAddiction