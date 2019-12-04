import React, { Component } from 'react';
import logo from './logo.svg';
import MenuButton from './Button'
import Header from './Header'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { changeUserName } from './redux/actions/userActions';
import { faThumbsDown, faThumbsUp, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data1: "TESTER"
    }
  }

  handleClick = () => {
    const users = ["TESTER", "TEST USER", "TIK ALPHA"]
    const randUser = users[Math.floor(Math.random() * users.length)];
    this.props.changeUserName(randUser)
  }

  render() {
    let { data1 } = this.state
    const { userName } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <Button variant="contained" className="App-nav-button">
            <span className="App-nav-button-text">My Data</span>
            <FontAwesomeIcon icon={faChartBar} />
          </Button>
          <h1 className="App-title">Emotion tracking</h1>
          <Button variant="contained" className="App-nav-button">
            <span className="App-nav-button-text">Settings</span>
            <FontAwesomeIcon icon={faCog} />
          </Button>
        </header>
        <main className="App-body">
          <div className="App-body-title">How you feeling?</div>
          <div className="App-feel-button-container">
            <Button variant="contained" className="App-feel-button"><FontAwesomeIcon icon={faThumbsDown} color="red" size="3x"/></Button>
            <Button variant="contained" className="App-feel-button"><FontAwesomeIcon icon={faThumbsUp} color="green" size="3x"/></Button>
          </div>
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

