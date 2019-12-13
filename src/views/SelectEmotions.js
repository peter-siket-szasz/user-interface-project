import React from 'react';
import { connect } from 'react-redux'
import EmotionButton from '../components/EmotionButton';
import AddEmotion from '../components/AddEmotion';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { emotions } from '../helpers/constants';
import { toggleEmotion } from '../redux/actions/emotionsActions';



class SelectEmotions extends React.Component {
    state = {
        addedEmotions: []
    }
    onClick = (e) => {
        this.props.toggleEmotion(e);
    }
    selectedEmpty = () => {
        return this.props.selected.length == 0
    }
    addEmotion = (name, mount) => {
        const newEmotion = {name: name, kind: "custom", sentiment: "custom"};
        this.setState({ addedEmotions: [...this.state.addedEmotions, newEmotion] })
        if (!mount) {
            this.props.toggleEmotion(newEmotion);
        }
    }

    componentDidMount() {
        const selected = this.props.selected.map(x => x.name)
        const names = emotions.map(x => x.name)
        selected.forEach(x => {
            if (!names.includes(x)) {
                this.addEmotion(x, true);
            }
        })
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
                <AddEmotion onClick={this.onClick} addEmotion={this.addEmotion}/>
                <div className="select-emotions-row">
                    {this.state.addedEmotions.map(x => {
                        const selected = this.props.selected.map(e => e.name).includes(x.name)
                        return (
                            <EmotionButton emotion={x} key={x.name} onClick={this.onClick} selected={selected}>
                                {x.name}
                            </EmotionButton>
                        )
                    })}
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