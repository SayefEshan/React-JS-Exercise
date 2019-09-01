import React, { Component } from 'react'

export default class Inputs extends Component {
    state = {
        value: ""
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {

        return (
            <div className="main" >
                <lebel>Input</lebel>
                <input type='text' value={this.state.value} onChange={this.handleInputChange} className="input-background"></input>
                <br />
                <button type='submit' onClick={() => this.props.showInput(this.state.value)}>Add</button>
            </div>
        )
    }
}
