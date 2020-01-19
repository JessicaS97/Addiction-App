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
        const sober = new Date(new Date(values.startDate).setHours(0, 0, 0))   // default sober time starts at 12am on that date

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
                    <div className="dashboard">
                        <h1>{addiction}</h1>
                        <div className="soberDate">
                            <h2>I've been sober for {this.state.soberDays} days {this.state.soberHours} hours {this.state.soberMinutes} minutes {this.state.soberSeconds} seconds</h2>
                        </div>
                        <div className="milestone">
                            <h2>Last milestone</h2>
                            <h2>Next milestone</h2>
                        </div>
                        <div className="savingCost">
                            <h2>So far I have saved</h2>
                            <h3>Money spent on cookies ${values.savingCost * this.state.soberDays}</h3>
                            <h3>Time spent on cookies {values.savingTime * this.state.soberHours} hours</h3>
                            <a href="/">View Details</a>
                        </div>
                        <div className="motive">
                            <h2>Why I stay {addiction} free</h2>
                            <h3>{values.motive}</h3>
                        </div>
                        <div className="more-options">
                            <h2>{addiction} Options</h2>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AddictionPage