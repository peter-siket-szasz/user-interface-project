import React, { Component } from 'react'
import { faThumbsDown, faThumbsUp, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import NavButton from '../NavButton';
import Header from '../Header';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button/Button';
import Chip from '@material-ui/core/Chip';
import EmotionButton from '../components/EmotionButton';
import { Link } from 'react-router-dom';
import { colors } from '../helpers/constants';
import { changeText, submit } from '../redux/actions/userActions';




class EmotionChipWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { picked: 2 };
    }



    handleClick = (number) => {
        this.setState((state, props) => ({
            picked: number
        }));
    }





    render() {
        const { picked } = this.state
        let background = colors[this.props.emotion.kind + "_" + this.props.emotion.sentiment];
        return (
            <div className="chip-wrapper" >
                <Chip style={{
                    border: picked == 1 ? "2px solid #804D00" : "none"
                }}
                    label={`low`} onClick={() => this.handleClick(1)} clickable size="medium" />
                <EmotionButton
                    style={{
                        width: 225,
                        margin: "2.5px 12.5px",
                        fontSize: "1.1em",
                        background: background,
                        border: picked == 2 ? "2px solid #804D00" : "none"
                    }}
                    emotion={this.props.emotion} key={this.props.emotion.name} onClick={() => this.handleClick(2)} selected={false}>
                    {this.props.emotion.name}
                </EmotionButton>
                <Chip
                    style={{
                        border: picked == 3 ? "2px solid #804D00" : "none"
                    }}
                    label={`high`} onClick={() => this.handleClick(3)} clickable size="medium" />
            </div>
        )
    }
}




class SubmitEmotions extends Component {


    handleClick = () => {
        this.props.submit(true);
        this.props.changeText("Emotions report submitted succesfully!")
    }

    render() {
        let { selected } = this.props
        console.log(selected);

        return (
            <div className="container">
                <Typography variant="h5">
                    Select emotions and scale
                </Typography>
                <Typography variant="subtitle1">
                    If you want, you can select whether your feeling is strong or just feeling e.g. slightly happy.
                </Typography>
                <Typography variant="subtitle1">
                    If you don't need to specify, you can submit emotions without editing.
                </Typography>
                <div className="action-container">
                    <Link to="/selectemotions">
                        <Button className="save-button" variant="contained"> Back </Button>
                    </Link>
                    <Link to="/">
                        <Button className="save-button" variant="contained" onClick={this.handleClick}> SAVE CHOICES </Button>
                    </Link>
                </div>
                <Divider className="divider" />
                <Typography variant="subtitle1">
                    Neutral
                </Typography>
                <div className="chip-container">
                    {selected.map(emotion =>
                        <EmotionChipWrapper key={emotion.name} emotion={emotion} handleClick={this.handleClick} />
                    )}
                </div>
                {/* <Divider className="divider" /> */}
                {/* <Link to="/">
                    <Button className="save-button" variant="contained"> SAVE CHOICES </Button>
                </Link> */}

            </div >

        )
    }
}

const mapStateToProps = (state) => ({
    selected: state.emotionsReducer.selected
})

const mapDispatchToProps = dispatch => {
    return {
        submit: (bool) => dispatch(submit(bool)),
        changeText: text => dispatch(changeText(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitEmotions);