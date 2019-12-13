import React from 'react';
import { Chip } from '@material-ui/core';
import { colors } from '../helpers/constants';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddEmotion extends React.Component {
    state = {
        modalOpen: false,
        value: ""
    }
    addEmotion = () => {
        this.props.addEmotion(this.state.value);
        this.setState({ modalOpen: false })
    }
    handleOpen = () => {
        this.setState({ value: "", modalOpen: true })
    }
    handleClose = () => {
        this.setState({ modalOpen: false })
    }
    handleChange = (e) => {
        this.setState({value: e.target.value});
    }
    onClick = () => {
        this.props.onClick(this.props.emotion)
    }
    render() {
        return (
            <>
                <Chip
                    label={"＋ Add emotion"}
                    onClick={this.handleOpen}
                    style={{
                        width: 225,
                        margin: "2.5px 12.5px",
                        fontSize: "1.1em",
                        background: "#f3f3f3",
                        filter: this.props.selected ? "brightness(50%)" : "brightness(100%)"
                    }} />
                <Dialog open={this.state.modalOpen} onClose={this.handleClose}>
                    <DialogTitle>Add emotion</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            fullWidth
                            autoComplete='off'
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.addEmotion} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default AddEmotion;