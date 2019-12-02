import React, { Component } from 'react';
import logo from './logo.svg';
import MenuButton from './Button'
import Header from './Header'
import { connect } from 'react-redux'
import { changeUserName } from './redux/actions/userActions';





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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <Header text={userName} />
          <MenuButton data1={data1} handleClick={this.handleClick}></MenuButton>
        </header>
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

