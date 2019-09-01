import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { link } from 'fs';
import Inputs from "./inputs"
import ShowTaskList from "./showTaskList"

class Task extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: []
        }
    }

    showInput = (value) => {
        let array = this.state.input;
        array.push(value)
        this.setState({
            input: array
        })
    }


    render() {

        console.log(this.state.input)
        return (
            <React.Fragment>
                <Inputs showInput={this.showInput} />
                <ShowTaskList input={this.state.input} />
            </React.Fragment>
        )
    }
}

export default Task
