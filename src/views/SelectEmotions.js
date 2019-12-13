import React from 'react';
import { connect } from 'react-redux'
import EmotionButton from '../components/EmotionButton';
import { emotions } from '../helpers/constants';
import { toggleEmotion } from '../redux/actions/emotionsActions';


class SelectEmotions extends React.Component {
    onClick = (e) => {
        this.props.toggleEmotion(e);
    }
    render() {
        return (
            <div className="container">
                <h1>How are you feeling</h1>
                <h3>Which emotions are you experiencing</h3>
                <div className="select-emotions-container">
                    <div className="select-emotions-column">
                        {emotions.map(x => { 
                            const selected = this.props.selected.map(e => e.name).includes(x.name)
                            return (
                                <EmotionButton emotion={x} key={x.name} onClick={this.onClick} selected={selected}> 
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

const mapStateToProps = (state) => ({
    selected: state.emotionsReducer.selected
})

const mapDispatchToProps = dispatch => {
    return {
        toggleEmotion: (emotion) => dispatch(toggleEmotion(emotion))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectEmotions);