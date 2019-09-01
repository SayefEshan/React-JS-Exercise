import React, { Component } from 'react'


class InputForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isFormShow: false,

            userProfile:
            {   id:this.props.generateRandomId(),
                name: '',
                address: '',
                mobileNo: '',
                email: ''
            }
        }
    }

    showForm = () => {

        this.setState({ isFormShow: true })
    }

    handleInputChange = (event) => {
        let userProfile = this.state.userProfile
        let name = event.target.name

        userProfile[name] = event.target.value
        this.setState({
            userProfile
        })
    }

    handleSubmit = () => {

        let id = this.props.generateRandomId();
        console.log(id)
        let userProfile = this.state.userProfile
        userProfile.id = id

        this.props.inputTable(userProfile)
    }

    render() {
        
        return (
            <div>

                <button className='submits' type='submit' onClick={this.showForm}>Add</button>

                {
                    this.state.isFormShow && (
                        <React.Fragment>
                            <h1 id='title'>Input Form</h1>

                            <div id='forms'>
                                <label className='lebel' >Name</label>
                                <input className='input' type="text" name='name' value={this.state.userProfile.name} onChange={this.handleInputChange} placeholder="Your name.."></input>

                                <label className='lebel' >Address</label>
                                <input className='input' type="text" name='address' value={this.state.userProfile.address} onChange={this.handleInputChange} placeholder="Your address.."></input>

                                <label className='lebel' >Mobile No.</label>
                                <input className='input' type="text" name='mobileNo' value={this.state.userProfile.mobileNo} onChange={this.handleInputChange} placeholder="Your mobile no.."></input>

                                <label className='lebel' >Email</label>
                                <input className='input' type="text" name='email' value={this.state.userProfile.email} onChange={this.handleInputChange} placeholder="Your email.."></input>

                                <input className='submits' type="submit" onClick={() => this.props.inputTable(this.state.userProfile)} value="Submit"></input>
                            </div>

                        </React.Fragment>

                    )
                }
            </div>

        )
    }
}

export default InputForm
