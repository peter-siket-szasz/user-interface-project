import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeelButton from '../FeelButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { changeText, submit } from '../redux/actions/userActions';
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

    submit = (bool) => {
        this.props.changeText("Submission succesfully received")
        this.props.submit(bool);
    }

    unsubmit = () => {
        this.submit(false);
    }


    render() {
        let { data1 } = this.state
        const { userName } = this.props

        return (
            <div>
                <div>
                    <div className="App-body-title">How are you feeling?</div>
                    <div className="App-feel-button-container">
                        <FeelButton icon={faThumbsDown} color="red" handleClick={this.submit}></FeelButton>
                        <FeelButton icon={faThumbsUp} color="green" handleClick={this.submit}></FeelButton>
                    </div>
                    <Link to="/selectemotions">
                        <Button variant="contained">Care to elaborate?</Button>
                    </Link>
                </div>
                <div className={"App-submit-text-container " + (this.props.submitted ? '' : 'hidden')}>
                    <div className="App-submit-text">{this.props.userName}</div>
                    <div className="button-container">
                        <Button variant="text" onClick={this.unsubmit}>Undo submit</Button>
                        <Button style={{ marginLeft: "3em" }} variant="contained" onClick={this.unsubmit}>Okay </Button>
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    userName: state.userReducer.userName,
    submitted: state.userReducer.submitted
})

const mapDispatchToProps = dispatch => {
    return {
        changeText: (name) => dispatch(changeText(name)),
        submit: (bool) => dispatch(submit(bool))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu)

