import React from 'react';
import { connect } from 'react-redux'
import EmotionButton from '../components/EmotionButton';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { emotions } from '../helpers/constants';
import { toggleEmotion } from '../redux/actions/emotionsActions';



class SelectEmotions extends React.Component {
    onClick = (e) => {
        this.props.toggleEmotion(e);
    }
    selectedEmpty = () => {
        return this.props.selected.length == 0
    }

    render() {
        let { selected } = this.props
        return (
            <div className="container">
                <Typography variant="h5">
                    Which emotions are you experiencing?
                </Typography>
                <Typography variant="subtitle1">
                    Select emotions by clicking.
                </Typography>
                <Typography variant="subtitle1">
                    Emotion can be unselected by clicking one again
                </Typography>
                <div className="action-container">
                    <Link to="/">
                        <Button className="save-button" variant="contained"> Back </Button>
                    </Link>
                    <Link to="/submitemotions">
                        <Button disabled={this.selectedEmpty()} variant="contained">Continue</Button>
                    </Link>
                </div>
                <Divider className="divider" />
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