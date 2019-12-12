import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NavButton extends Component {
    feelClick = () => {
        this.props.handleClick(true);
    }

    render() {
        const { color, icon } = this.props
        return (
            <Button variant="contained" className="Feel-button" onClick={this.feelClick}>
                <FontAwesomeIcon icon={icon} color={color} size="3x" />
            </Button>
        )
    }
}