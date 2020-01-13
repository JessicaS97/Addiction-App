import React from 'react'

import MenuBar from './../MenuBar/MenuBar'

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
    }

    render() {
        return(
            <div>
                <MenuBar />
            </div>
        )
    }
}

export default NewAddiction