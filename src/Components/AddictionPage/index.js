import React from 'react'

import MenuBar from '../MenuBar/MenuBar'
import './index.css'

class AddictionPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            soberDays: '',
            soberHours: '',
            soberMinutes: '',
            soberSeconds: ''
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(), 
            1000
        );
    }

    tick() {
        const diff = this.calculateTImeDifference()
        this.setState({
            soberDays: diff[0],
            soberHours: diff[1],
            soberMinutes: diff[2],
            soberSeconds: diff[3]
        })
    }

    calculateTImeDifference = () => {
        const {values} = this.props.location.state
        const today = new Date() 
        const sober = new Date(values.startDate)

        const diff = []
        
        const diff_in_time = today.getTime() - sober.getTime()

        const diff_in_days = Math.floor((diff_in_time) / (1000 * 3600 * 24))
        const diff_in_hours = Math.floor((diff_in_time / (1000 * 60 * 60)) % 24)
        const diff_in_minutes = Math.floor((diff_in_time / (1000 * 60)) % 60)
        const diff_in_seconds = Math.floor((diff_in_time) / (1000) % 60)
        diff.push(diff_in_days, diff_in_hours, diff_in_minutes, diff_in_seconds)

        return diff
    }

    render() {
        const {values} = this.props.location.state
        const addiction = values.addiction === 'Other' ? values.otherAddiction : values.addiction

        if (this.state.soberDays === '') {
            // REPLACE WITH LOADING ICON
            return null
        } else {
            return(
                <div>
                    <MenuBar />
                    <h1>{addiction}</h1>
                    <div className="soberDate">
                        <h2>You've been sober for {this.state.soberDays} days {this.state.soberHours} hours {this.state.soberMinutes} minutes {this.state.soberSeconds} seconds</h2>
                    </div>
                </div>
            )
        }
    }
}

export default AddictionPage