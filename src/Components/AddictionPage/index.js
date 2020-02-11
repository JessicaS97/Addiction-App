import React from 'react'
import {Link} from 'react-router-dom'

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
        const sober = new Date(new Date(values.startDate))   // default sober time starts at 12am on that date

        const diff = []
        
        const diff_in_time = today.getTime() - sober.getTime()

        const diff_in_days = Math.floor((diff_in_time) / (1000 * 3600 * 24))
        const diff_in_hours = Math.floor((diff_in_time / (1000 * 60 * 60)) % 24)
        const diff_in_minutes = Math.floor((diff_in_time / (1000 * 60)) % 60)
        const diff_in_seconds = Math.floor((diff_in_time) / (1000) % 60)
        diff.push(diff_in_days, diff_in_hours, diff_in_minutes, diff_in_seconds)

        return diff
    }

    reset = e => {
        let {values} = this.props.location.state
        let reset = window.confirm('You sure you want to reset?')
        let today = new Date()
        if (reset) {
            values.startDate = today;
        }
    }

    changeMotive = () => {
        let {values} = this.props.location.state
        let motiveText = document.getElementsByClassName("motive-text")[0];
        let button = document.getElementsByClassName("changeMotive")[0];
        let motiveGrid = document.getElementsByClassName("motive")[0];
        let oldButton = button
        button.style.display = 'none'
        let newButton = document.createElement("button")
        newButton.innerHTML = "Confirm"
        motiveGrid.appendChild(newButton)
        let newMotive
        motiveText.innerHTML = ""
        let textInput = document.createElement("input");
        textInput.setAttribute("type", "text");
        motiveText.appendChild(textInput);

        motiveText.addEventListener("change", e => {
            newMotive = e.target.value
        })
        
        newButton.addEventListener("click", () => {
            motiveText.removeChild(textInput)
            motiveText.innerHTML = newMotive
            newButton.style.display = 'none'
            oldButton.style.display = 'block'
        })
        
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
                        {/* <div className="milestone">
                            <h2>Last milestone</h2>
                            <h2>Next milestone</h2>
                        </div> */}
                        <div className="savingCost" style={{display: values.savingCost === '' ? 'none' : 'block'}}>
                            <h2>So far I have saved</h2>
                            <h3>Money spent on cookies ${values.savingCost * this.state.soberDays}</h3>
                            <h3>Time spent on cookies {values.savingTime * this.state.soberHours} hours</h3>
                        </div>
                        <div className="motive"  style={{display: values.motive === '' ? 'none' : 'block'}}>
                            <h2>Why I stay {addiction} free</h2>
                            <h3 className="motive-text">{values.motive}</h3>
                            <button onClick={this.changeMotive} className="changeMotive">Change</button>
                        </div>
                        <div className="more-options">
                            <h2>{addiction} Options</h2>
                            <div className="buttons-addictionpage">
                                <button onClick={this.reset}>Reset</button>
                                <br></br>
                                <button>Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AddictionPage