import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeelButton from '../FeelButton';
import { changeUserName } from '../redux/actions/userActions';
import { faThumbsDown, faThumbsUp, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';

class StartMenu extends Component {
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
            <div>
                <div className="App-body-title">How you feeling?</div>
                <div className="App-feel-button-container">
                    <FeelButton icon={faThumbsDown} color="red" handleClick={this.handleClick}></FeelButton>
                    <FeelButton icon={faThumbsUp} color="green" handleClick={this.handleClick}></FeelButton>
                </div>
                <div>{userName}</div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu)

