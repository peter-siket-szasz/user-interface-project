import React from 'react';
import { Chip } from '@material-ui/core';
import { colors } from '../helpers/constants';

const EmotionButton = props => {
    let background = colors[props.kind + "_" + props.sentiment];
    return (
        <Chip 
            label={props.children} 
            onClick={() => console.log(props.children)} 
            style={{
                width: 225,
                margin: "2.5px 12.5px",
                fontSize: "1.1em",
                background: background
        }}/>
    )
}

export default EmotionButton;