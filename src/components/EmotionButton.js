import React from 'react';
import { Chip } from '@material-ui/core';
import { colors } from '../helpers/constants';

const EmotionButton = props => {
    let background = colors[props.emotion.kind + "_" + props.emotion.sentiment];
    const onClick = () => {
        props.onClick(props.emotion)
    }
    return (
        <Chip 
            label={props.emotion.name} 
            onClick={onClick} 
            style={{
                width: 225,
                margin: "2.5px 12.5px",
                fontSize: "1.1em",
                background: background,
                filter: props.selected ? "brightness(50%)" : "brightness(100%)"
        }}/>
    )
}

export default EmotionButton;