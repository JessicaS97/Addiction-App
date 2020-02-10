import React from 'react'

import MenuBar from '../MenuBar/MenuBar'
import AddictionOptions from './AddictionOptions'
import SoberDate from './SoberDate'
import Savings from './Savings'
import Motive from './Motive'
import Confirm from './Confirm'
import GuestHome from '../GuestHome/GuestHome'
import uuid from 'uuid/v1'

class AddictionForm extends React.Component { 

    state = {
        step: 1,
        addiction: '',
        startDate: '',
        savingCost: '',
        savingTime: '',
        motive: '',
        otherAddiction: '',
        id: uuid()
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
        const {addiction, startDate, savingCost, savingTime, motive, otherAddiction, id} = this.state
        const values = {addiction, startDate, savingCost, savingTime, motive, otherAddiction, id}
        
        switch(step) {
            case 1:
                return(
                        <div>
                        <MenuBar />
                        <AddictionOptions 
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
                        <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        addAddiction={this.props.addAddiction}
                        values={values}
                        />
                    </div>
                )
            case 6:
                return(
                    <GuestHome />
                )
            default: return(
                <div></div>
            )
        }
    }
}

export default AddictionForm