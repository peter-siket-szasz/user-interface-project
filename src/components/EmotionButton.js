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
                width: 250,
                fontSize: "1.2em",
                background: background
        }}/>
    )
}

export default EmotionButton;