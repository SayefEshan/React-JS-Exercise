import React, { Component } from "react";
import InputForm from "./inputForm1";
import EditForm1 from "./editForm1";
import { Container, Button, Table } from "react-bootstrap";
import PopUp from "./popUp";
import Search from "./search";

class Profile1 extends Component {
  constructor(props) {
    super(props);
    this.generateRandomId = this.generateRandomId.bind(this);
    this.state = {
      isPopUpShow: false,
      isFormShow: false,
      isEditFormShow: false,
      deleteId: "",
      uniqueId: "",
      editedName: "",
      editedAddress: "",
      editedMobileNo: "",
      editedEmail: "",
      editedGender: "",
      editedSkill: [],
      editedCountry: "",
      editedDateOfBirth: "",
      profile: [
        {
          id: this.generateRandomId(),
          name: "Sayef",
          address: "Dhaka",
          mobileNo: "01768732021",
          email: "say@gmail.com",
          gender: "Male",
          skills: ["Java", "C++"],
          country: "Canada",
          dateOfBirth: new Date("1991-08-11")
        },
        {
          id: this.generateRandomId(),
          name: "Abid",
          address: "Barishal",
          mobileNo: "01684815595",
          email: "abd@gmail.com",
          gender: "Female",
          skills: ["C++"],
          country: "Bangladesh",
          dateOfBirth: new Date("1996-06-04")
        },
        {
          id: this.generateRandomId(),
          name: "Eshan",
          address: "Khulna",
          mobileNo: "01962487412",
          email: "srk@gmail.com",
          gender: "Male",
          skills: ["Javascript"],
          country: "Australia",
          dateOfBirth: new Date("2001-11-11")
        },
        {
          id: this.generateRandomId(),
          name: "Sany",
          address: "Sylhet",
          mobileNo: "01632589631",
          email: "mds@gmail.com",
          gender: "Female",
          skills: ["Python"],
          country: "Germany",
          dateOfBirth: new Date("1999-04-26")
        },
        {
          id: this.generateRandomId(),
          name: "Jabid",
          address: "Chittagong",
          mobileNo: "01531754231",
          email: "jh@gmail.com",
          gender: "Male",
          skills: ["Java"],
          country: "Canada",
          dateOfBirth: new Date("1989-01-21")
        },
        {
          id: this.generateRandomId(),
          name: "Robi",
          address: "Rajshahi",
          mobileNo: "01721873649",
          email: "rah@gmail.com",
          gender: "Female",
          skills: ["Python,C++"],
          country: "Bangladesh",
          dateOfBirth: new Date("2000-02-29")
        }
      ]
    };
  }

  inputTable = (
    userId,
    userName,
    address,
    mobileNo,
    email,
    gender,
    skills,
    country,
    dateOfBirth
  ) => {
    let array = [...this.state.profile];
    let obj = {
      id: userId,
      name: userName,
      address: address,
      mobileNo: mobileNo,
      email: email,
      gender: gender,
      skills: skills,
      country: country,
      dateOfBirth: dateOfBirth
    };
    array.push(obj);
    this.setState({
      profile: array
    });
  };

  updateTable = (
    id,
    name,
    address,
    mobileNo,
    email,
    gender,
    skills,
    country,
    dateOfBirth
  ) => {
    let array = [...this.state.profile];
    array.map((person, index) => {
      if (person.id === id) {
        let obj = {
          id: id,
          name: name,
          address: address,
          mobileNo: mobileNo,
          email: email,
          gender: gender,
          skills: skills,
          country: country,
          dateOfBirth: dateOfBirth
        };

        array[index] = obj;
        this.setState({
          profile: array
        });
      }
    });
  };

  deleteData = () => {
    let profile = this.state.profile;
    profile.splice(this.state.deleteId, 1);
    this.setState({
      profile
    });
    this.toggleModal();
  };

  generateRandomId = () => {
    let randomNumber = "xxxx-xxxx".replace(/[x]/g, function() {
      return ((Math.random() * 9) | 0).toString();
    });
    return randomNumber;
  };

  editData = (
    id,
    name,
    address,
    mobileNo,
    email,
    gender,
    skills,
    country,
    dateOfBirth
  ) => {
    this.setState({
      uniqueId: id,
      editedName: name,
      editedAddress: address,
      editedMobileNo: mobileNo,
      editedEmail: email,
      editedGender: gender,
      editedSkill: skills,
      editedCountry: country,
      editedDateOfBirth: dateOfBirth
    });
    this.toggleEditForm();
  };

  toggleEditForm = () => {
    this.setState({ isEditFormShow: !this.state.isEditFormShow });
  };

  toggleForm = () => {
    this.setState({ isFormShow: !this.state.isFormShow });
  };

  toggleModal = id => {
    this.setState({
      isPopUpShow: !this.state.isPopUpShow,
      deleteId: id
    });
  };

  upcompareBy(key) {
    return function(a, b) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    };
  }

  upsortBy(key) {
    let arrayCopy = [...this.state.profile];
    arrayCopy.sort(this.upcompareBy(key));
    this.setState({ profile: arrayCopy });
  }

  downcompareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  downsortBy(key) {
    let arrayCopy = [...this.state.profile];
    console.log(arrayCopy);
    arrayCopy.sort(this.downcompareBy(key));
    this.setState({ profile: arrayCopy });
  }

  filteredArray = array => {
    this.setState({
      profile: array
    });
  };

  tableData() {
    return this.state.profile.map((person, index) => {
      const {
        id,
        name,
        address,
        mobileNo,
        email,
        gender,
        skills,
        country,
        dateOfBirth
      } = person;

      let mydateOfBirth = dateOfBirth.toLocaleDateString();

      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{address}</td>
          <td>{email}</td>
          <td>{mobileNo}</td>
          <td>{gender}</td>
          <td>
            {skills.map((skill, index) =>
              skills.length === index + 1 ? skill : skill + ", "
            )}
          </td>
          <td>{country}</td>
          <td>{mydateOfBirth}</td>
          <td>
            <Button
              variant="info"
              id="button"
              onClick={() =>
                this.editData(
                  id,
                  name,
                  address,
                  mobileNo,
                  email,
                  gender,
                  skills,
                  country,
                  dateOfBirth
                )
              }
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => this.toggleModal(index)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Container>
        <h1 id="title">Profile Table</h1>

        <Search items={this.state.profile} filteredArray={this.filteredArray} />
        <Table
          striped
          bordered
          hover
          variant="dark"
          id="tableHead"
          class="table table-striped table-bordered table-sm"
        >
          <thead>
            <tr>
              <th >
                Name{" "}
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.downsortBy("name")}
                >
                <i class="fas fa-sort-up"></i>
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("name")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
                
              </th>
              <th>
                Address
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.downsortBy("address")}
                >
                <i class="fas fa-sort-up"></i>
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("address")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
                
              </th>
              <th>
                Email{" "}
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.downsortBy("email")}
                >
                <i class="fas fa-sort-up"></i>
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("email")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
                
              </th>
              <th>
                Mobile No.{" "}
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.downsortBy("mobileNo")}
                >
                <i class="fas fa-sort-up"></i>
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("mobileNo")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
                
              </th>
              <th>
                Gender{" "}
                <Button
                variant="outline-light"
                size="sm"
                onClick={() => this.downsortBy("gender")}
              >
              <i class="fas fa-sort-up"></i>
              </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("gender")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
               
              </th>
              <th>
                Skills{" "}
                <Button
                variant="outline-light"
                size="sm"
                onClick={() => this.downsortBy("skills")}
              >
              <i class="fas fa-sort-up"></i>
              </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("skills")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
               
              </th>
              <th>
                Country{" "}
                <Button
                variant="outline-light"
                size="sm"
                onClick={() => this.downsortBy("country")}
              >
              <i class="fas fa-sort-up"></i>
              </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("country")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
               
              </th>
              <th>
                BirthDate{" "}
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.downsortBy("dateOfBirth")}
                >
                <i class="fas fa-sort-up"></i>
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => this.upsortBy("dateOfBirth")}
                >
                <i class="fas fa-sort-down"></i>
                </Button>
                
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.tableData()}</tbody>
        </Table>
        <Button
          className="add"
          variant="light"
          size="lg"
          type="submit"
          onClick={this.toggleForm}
        >
          ADD
        </Button>

        {this.state.isPopUpShow && (
          <PopUp
            isPopUpShow={this.state.isPopUpShow}
            toggleModal={this.toggleModal}
            deleteData={this.deleteData}
          />
        )}

        {this.state.isFormShow && (
          <InputForm
            isFormShow={this.state.isFormShow}
            inputTable={this.inputTable}
            generateRandomId={this.generateRandomId}
            toggleForm={this.toggleForm}
          />
        )}
        {this.state.isEditFormShow && (
          <EditForm1
            uniqueId={this.state.uniqueId}
            editedName={this.state.editedName}
            editedAddress={this.state.editedAddress}
            editedMobileNo={this.state.editedMobileNo}
            editedEmail={this.state.editedEmail}
            editedGender={this.state.editedGender}
            editedSkill={this.state.editedSkill}
            editedCountry={this.state.editedCountry}
            editedDateOfBirth={this.state.editedDateOfBirth}
            toggleEditForm={this.toggleEditForm}
            updateTable={this.updateTable}
            isEditFormShow={this.state.isEditFormShow}
          />
        )}
      </Container>
    );
  }
}
export default Profile1;
