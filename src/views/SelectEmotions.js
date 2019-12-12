import React from 'react';
import EmotionButton from '../components/EmotionButton';
import { emotions } from '../helpers/constants';

class SelectEmotions extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>How are you feeling</h1>
                <h3>Which emotions are you experiencing</h3>
                <div className="select-emotions-container">
                    <div className="select-emotions-column">
                        {emotions.map(x => { 
                            return (
                                <EmotionButton sentiment={x.sentiment} kind={x.kind} key={x.name}> 
                                    {x.name}
                                </EmotionButton>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectEmotions;