import React from "react"
import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage/LandingPage'
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
        let backdrop

        if (this.state.sideBarOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return(
            <div id="header" style={{height: '100%'}}>
                <NavBar clickHandler={this.toggleClickHandler}/>
                <SideBar show={this.state.sideBarOpen}/>
                {backdrop}
                <LandingPage />
            </div>
        )
    }
}

export default Header