import React, { Component } from 'react';
import FeelButton from './FeelButton';
import NavButton from './NavButton';
import { connect } from 'react-redux'
import { changeUserName } from './redux/actions/userActions';
import { faThumbsDown, faThumbsUp, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';




class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data1: "TESTER"
    }
  }

  handleClick = (string) => {
    this.props.changeUserName(string)
  }

  render() {
    let { data1 } = this.state
    const { userName } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <NavButton text="My data" icon={faChartBar} handleClick={this.handleClick}></NavButton>
          <h1 className="App-title">Emotion tracking</h1>
          <NavButton text="Settings" icon={faCog} handleClick={this.handleClick}></NavButton>
        </header>
        <main className="App-body">
          <div className="App-body-title">How you feeling?</div>
          <div className="App-feel-button-container">
            <FeelButton icon={faThumbsDown} color="red" handleClick={this.handleClick}></FeelButton>
            <FeelButton icon={faThumbsUp} color="green" handleClick={this.handleClick}></FeelButton>
          </div>
          <div>{userName}</div>
        </main>
      </div >
    )
  }
}


const mapStateToProps = (state) => ({
  userName: state.userReducer.userName
})


const mapDispatchToProps = dispatch => {
  return {
    changeUserName: (name) => dispatch(changeUserName(name))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

