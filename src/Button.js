import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class MenuButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            data: this.props.data1
        }
    }

    // handleClick = () => this.setState({ count: this.state.count + 1 })
    handleClick = () => this.props.handleClick()

    render() {
        const { data1, data17 } = this.props
        const { count, data } = this.state
        return (
            <div>
                <Button variant="contained" onClick={this.handleClick}> {count}  {data1} {data}</Button>
            </div>
        )
    }
}
