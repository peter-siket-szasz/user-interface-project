import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NavButton extends Component {
    navClick = () => {
        this.props.handleClick("Clicked " + this.props.text);
    }

    render() {
        const { text, icon } = this.props
        return (
            <Button variant="contained" className="Nav-button" onClick={this.navClick}>
                <span className="Nav-button-text">{text}</span>
                <FontAwesomeIcon icon={icon} />
            </Button>
        )
    }
}