import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeUserName } from './redux/actions/userActions';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { faThumbsDown, faThumbsUp, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import FeelButton from './FeelButton';
import NavButton from './NavButton';
import StartMenu from './views/StartMenu';
import SelectEmotions from './views/SelectEmotions';
import SubmitEmotions from './views/SubmitEmotions';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data1: "TESTER"
        }
    }

    handleClick = (string) => {
        console.log("TESTISSÄ");

        // this.props.changeUserName(string)
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
                    <Route exact path='/selectemotions' component={SelectEmotions} />
                    <Route exact path='/submitemotions' component={SubmitEmotions} />
                    <Route exact path='/' component={StartMenu} />
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

