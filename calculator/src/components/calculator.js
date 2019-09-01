import React, { Component } from 'react'
import Inputs from './inputs';
import Output from './output';



class Calculator extends Component {

    constructor(props) {
        super(props)
        this.result = 0
        this.state = {
            output: null
        }
    }

    equal = () => {
        this.setState({
            output: this.result,

        })
    }
    
    outPutNull = () => {
        this.setState({
            output: ''
        })
    }

    add = (value1, value2) => {
        this.result = Number(value1) + Number(value2);
    }

    subtract = (value1, value2) => {
        this.result = Number(value1) - Number(value2);
    }

    multiply = (value1, value2) => {
        this.result = Number(value1) * Number(value2);
    }

    devide = (value1, value2) => {
        this.result = Number(value1) / Number(value2);
    }


    render() {
        return (
            <div className='Main-div' >
                <h3>Calculator</h3>
                <Inputs  outPutNull={this.outPutNull} add={this.add} subtract={this.subtract} multiply={this.multiply} devide={this.devide} equal={this.equal} />
                <Output output={this.state.output} />

            </div>
        )
    }
}

export default Calculator
