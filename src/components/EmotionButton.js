import React from 'react';

const EmotionButton = props => {
    return (
        <div style={{
            padding: 15,
            width: 100,
            height: 20,
            borderRadius: 20 + 30,
            background: "green"
        }}>
            {props.children}
        </div>
    )
}

export default EmotionButton;