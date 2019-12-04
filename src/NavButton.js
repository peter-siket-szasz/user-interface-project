import React from 'react'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const NavButton = ({icon, text, handleClick}) => {

    return (
        <Button variant="contained" className="Nav-button" onClick={handleClick}>
            <span className="Nav-button-text">{text}</span>
            <FontAwesomeIcon icon={icon} />
        </Button>
    )
}

export default NavButton
