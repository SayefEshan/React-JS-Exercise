import React, { Component } from 'react'
import InputForm from './inputForm';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.generateRandomId = this.generateRandomId.bind(this);
        this.state = {

            profile: [
                {
                    id: this.generateRandomId(),
                    name: "Sayef",
                    address: "Dhaka",
                    mobileNo: "0172353153",
                    email: "say@gmail.com"

                },
                {
                    id: this.generateRandomId(),
                    name: "Sarkar",
                    address: "Chittagong",
                    mobileNo: "0172235131",
                    email: "sarkar@gmail.com"

                },
                {
                    id: this.generateRandomId(),
                    name: "Eshan",
                    address: "Khulna",
                    mobileNo: "017262626",
                    email: "srk@gmail.com"

                },
                {
                    id: this.generateRandomId(),
                    name: "jabid",
                    address: "Barishal",
                    mobileNo: "01645456",
                    email: "jabid@gmail.com"
                }
            ]

        }
    }

    inputTable = (userInfo) => {
        // console.log(userInfo);
        let array = this.state.profile;

        array.push(userInfo);
        this.setState({
            profile: array
        })
    }

    deleteData = (id) => {

        let profile = this.state.profile;
        profile.splice(id, 1);

        this.setState({
            profile: profile
        })

    }
    
    generateRandomId = () => {
        let randomNumber = 'xxxx-xxxx'.replace(/[x]/g, function () {
            return (Math.random() * 9 | 0).toString();
        });
        return randomNumber;
    }




    tableData() {

        return this.state.profile.map((person, index) => {
            const { id, name, address, mobileNo, email } = person
            return (
                <tr key={id}>

                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{mobileNo}</td>
                    <td>{email}</td>
                    <td>
                        <button id="delete-button" onClick={() => this.deleteData(index)}>Delete</button>
                    </td>

                </tr>
            )
        })
    }


    render() {

        console.log(this.state.profile)


        return (
            <div>
                <h1 id='title'>Profile Table</h1>
                <table id='persons'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mobile No.</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableData()}
                    </tbody>

                </table>


                <InputForm inputTable={this.inputTable} generateRandomId={this.generateRandomId} />
            </div>
        )
    }
}

export default Profile
