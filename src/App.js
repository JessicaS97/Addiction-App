import React from 'react'

import Footer from './Components/Footer'
import Header from './Components/Header'
import MainContent from './Components/MainContent/MainContent'
import SideBar from './Components/SideBar/SideBar'
import Backdrop from './Components/Backdrop/Backdrop'

class App extends React.Component {

  state = {
      sideBarOpen: false
  }

  toggleClickHandler = () => {
    this.setState(prevState => {
      return {sideBarOpen: !prevState.sideBarOpen}
    });
  }

  render() {
    let sideBar, backdrop
    if (this.state.sideBarOpen) {
      sideBar = <SideBar/ >
      backdrop = <Backdrop />
    }
    return (
      <div className="App" style={{height:'100%'}}>
        <Header />
        {sideBar}
        {backdrop}
        <MainContent />
        <Footer />
      </div>
    ); 
  }
}

export default App
