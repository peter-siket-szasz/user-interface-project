import React, { Component } from 'react'
import { faThumbsDown, faThumbsUp, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import NavButton from '../NavButton';
import Header from '../Header';

import Typography from '@material-ui/core/Typography';


export default class SubmitEmotions extends Component {


    handleClick = () => {
        console.log("JES")
    }

    render() {
        return (
            <div>

                <Typography variant="h4">
                    Select emotions and scale
                </Typography>
            </div>
        )
    }
}
