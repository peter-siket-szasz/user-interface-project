import React from 'react';
import EmotionButton from '../components/EmotionButton';

class SelectEmotions extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>How are you feeling</h1>
                <h3>Select emotions you are having right now</h3>
                <EmotionButton>Sad</EmotionButton>
            </div>
        )
    }
}

export default SelectEmotions;