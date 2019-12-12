import React, { Component } from 'react'
import { faThumbsDown, faThumbsUp, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import NavButton from '../NavButton';
import Header from '../Header';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button/Button';
import Chip from '@material-ui/core/Chip';





const EmotionChipWrapper = props => {
    return (
        <div className="chip-wrapper">
            <Chip label={`Slightly`} onClick={props.handleClick} clickable size="medium" />
            <Chip label={props.txt} color="primary" onClick={props.handleClick} clickable size="medium" />
            <Chip label={`Very`} onClick={props.handleClick} clickable size="medium" />
        </div>
    )
}




export default class SubmitEmotions extends Component {


    handleClick = () => {
        console.log("JES")
    }

    render() {
        let feelings = ["Gratitude", "Happy", "Joyful"]
        return (
            <div className="submit-emotions-container">
                <Typography variant="h5">
                    Select emotions and scale
                </Typography>
                <Typography variant="subtitle1">
                    If you want, you can select whether your feeling is strong or just feeling e.g. slightly happy.
                </Typography>
                <Typography variant="subtitle1">
                    If you don't need to specify, you can submit without editing.
                </Typography>
                <div className="save-container">
                    <Button className="save-button" variant="contained"> SAVE CHOICES </Button>
                </div>
                <Divider className="divider" />
                <div className="chip-container">
                    {feelings.map(feel =>
                        <EmotionChipWrapper key={feel} txt={feel} handleClick={this.handleClick} />
                    )}
                </div>
                <Divider className="divider" />
                <Button className="save-button" variant="contained"> SAVE CHOICES </Button>

            </div>
        )
    }
}
