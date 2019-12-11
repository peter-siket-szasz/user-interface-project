import React from 'react';
import { Chip } from '@material-ui/core';

const EmotionButton = props => {
    return (
        <Chip label={props.children} onClick={() => console.log(props.children)} />
    )
}

export default EmotionButton;