import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeelButton from '../FeelButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { changeUserName, submit } from '../redux/actions/userActions';
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
                    <div className="App-body-title">How you feeling?</div>
                    <div className="App-feel-button-container">
                        <FeelButton icon={faThumbsDown} color="red" handleClick={this.submit}></FeelButton>
                        <FeelButton icon={faThumbsUp} color="green" handleClick={this.submit}></FeelButton>
                    </div>
                    <Link to="/selectemotions">
                        <Button variant="contained">Care to elaborate?</Button>
                    </Link>
                </div>
                <div className={"App-submit-text-container " + (this.props.submitted ? '' : 'hidden')}>
                    <div className="App-submit-text">Submission received</div>
                    <Button variant="text" onClick={this.unsubmit}>Undo submit</Button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userName: state.userReducer.userName,
    submitted: state.userReducer.submitted
})

const mapDispatchToProps = dispatch => {
    return {
        changeUserName: (name) => dispatch(changeUserName(name)),
        submit: (bool) => dispatch(submit(bool))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu)

