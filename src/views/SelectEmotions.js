import React from 'react';
import EmotionButton from '../components/EmotionButton';
import { emotions } from '../helpers/constants';

class SelectEmotions extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>How are you feeling</h1>
                <h3>Select emotions you are having right now</h3>
                {
                    emotions.map(x => {
                        return (
                            <EmotionButton sentiment={x.sentiment} kind={x.kind} key={x.name}> 
                                {x.name}
                            </EmotionButton>
                        )
                    })
                }
            </div>
        )
    }
}

export default SelectEmotions;