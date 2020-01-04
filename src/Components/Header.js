import React from "react"
import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage'
import SideBar from './SideBar/SideBar'
import Backdrop from './Backdrop/Backdrop'

class Header extends React.Component {

    state = {
        sideBarOpen: false
    }
  
    toggleClickHandler = () => {
      this.setState(prevState => {
        return {sideBarOpen: !prevState.sideBarOpen}
      });
    }

    backdropClickHandler = () => {
        this.setState({sideBarOpen: false})
    }

    render() {
        let sideBar, backdrop

        if (this.state.sideBarOpen) {
          sideBar = <SideBar/ >
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return(
            <div id="header">
                <NavBar clickHandler={this.toggleClickHandler}/>
                {sideBar}
                {backdrop}
                <LandingPage />
            </div>
        )
    }
}

export default Header