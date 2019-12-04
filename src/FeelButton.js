import React from 'react'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const FeelButton = ({icon, color, handleClick}) => {

    return (
        <Button variant="contained" className="Feel-button" onClick={handleClick}>
            <FontAwesomeIcon icon={icon} color={color} size="3x"/>
        </Button>
    )
}

export default FeelButton
