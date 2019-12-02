import React, { Component } from 'react';
import logo from './logo.svg';
import MenuButton from './Button'
import Header from './Header'





export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data1: "TETETETET"
    }
  }

  render() {
    let { data1 } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <Header text="Header" />
          <MenuButton data1={data1}></MenuButton>

        </header>
      </div>
    )
  }
}


