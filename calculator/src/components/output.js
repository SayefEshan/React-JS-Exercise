import React, { Component } from 'react'

class Output extends Component {
    render() {
        return (
            <React.Fragment>
                <input type='text' value = {this.props.output}  className='Output' placeholder='Output'></input>
                
            </React.Fragment>
        )
    }
}

export default Output
