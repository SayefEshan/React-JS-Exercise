import React, { Component } from 'react'

export default class Inputs extends Component {

    state = {
        input1: 0,
        input2: 0,

    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    allClear = () => {
        this.setState({
            input1: '',
            input2: ''

        })

    }

    render() {
        return (
            <React.Fragment>

                <input type='Number' name="input1" value={this.state.input1} onChange={this.handleInputChange} className='Inputs' placeholder='Input'></input>
                <input type='Number' name="input2" value={this.state.input2} onChange={this.handleInputChange} className='Inputs' placeholder='Input'></input>


                <button className='Button' onClick={() => this.props.add(this.state.input1, this.state.input2)} >+</button>
                <button className='Button' onClick={() => this.props.subtract(this.state.input1, this.state.input2)}>-</button>
                <button className='Button' onClick={() => {this.props.outPutNull();this.allClear() } }>C</button>
                <button className='Button' onClick={() => this.props.multiply(this.state.input1, this.state.input2)}>*</button>
                <button className='Button' onClick={() => this.props.devide(this.state.input1, this.state.input2)}>/</button>
                <button className='Button' onClick= {() => this.props.equal()}>=</button>
            </React.Fragment>
        )
    }
}


