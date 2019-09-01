import React, { Component } from 'react'

export default class showTaskList extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.props.input.map((item, i) => {
                        return (<li>{item}</li>)
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
