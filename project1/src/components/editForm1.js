import React, { Component } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditForm1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uniqueId: this.props.uniqueId,
      editedName: this.props.editedName,
      editedAddress: this.props.editedAddress,
      editedMobileNo: this.props.editedMobileNo,
      editedEmail: this.props.editedEmail,
      editedGender: this.props.editedGender,
      editedSkill: this.props.editedSkill,
      editedCountry: this.props.editedCountry,
      editedDateOfBirth: this.props.editedDateOfBirth,
      demoSkills: [
        { value: "C++", isChecked: false },
        { value: "Java", isChecked: false },
        { value: "Python", isChecked: false },
        { value: "Javascript", isChecked: false }
      ],
      nameError: "",
      addressError: "",
      emailError: "",
      mobileNoError: "",
      dateOfBirthError: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      editedDateOfBirth: date
    });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckBox = event => {
    let demoSkills = this.state.demoSkills;
    let array = this.state.editedSkill;

    demoSkills.map(skill => {
      if (skill.value === event.target.value) {
        skill.isChecked = event.target.checked;
        if (skill.isChecked) {
          array.push(skill.value);
        } else {
          array.map((arr, id) => {
            if (arr === skill.value) {
              array.splice(id, 1);
            }
          });
        }
        this.setState({
          editedSkill: array
        });
      }
    });
    this.setState({ demoSkills: demoSkills });
  };

  validate = () => {
    let nameError = "";
    let addressError = "";
    let emailError = "";
    let mobileNoError = "";
    let dateOfBirthError = "";

    if (!this.state.editedName) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.editedAddress) {
      addressError = "Address cannot be blank";
    }

    if (!this.state.editedEmail.includes("@")) {
      emailError = "Invalid email";
    }

    if (!(this.state.editedMobileNo.length === 11)) {
      mobileNoError = "Invalid mobile number";
    }

    if (!this.state.editedDateOfBirth) {
      dateOfBirthError = "Date of birth missing";
    }

    if (
      addressError ||
      nameError ||
      emailError ||
      mobileNoError ||
      dateOfBirthError
    ) {
      this.setState({
        nameError: nameError,
        addressError: addressError,
        emailError: emailError,
        mobileNoError: mobileNoError,
        dateOfBirthError: dateOfBirthError
      });
      return false;
    }
    return true;
  };

  handleSubmit = () => {
    const isValid = this.validate();
    if (isValid) {
      this.props.updateTable(
        this.state.uniqueId,
        this.state.editedName,
        this.state.editedAddress,
        this.state.editedMobileNo,
        this.state.editedEmail,
        this.state.editedGender,
        this.state.editedSkill,
        this.state.editedCountry,
        this.state.editedDateOfBirth
      );
      this.props.toggleEditForm();
    }
  };

  onCheck = skill => {
    let editedSkill = this.state.editedSkill;
    editedSkill.map(edSkill => {
      if (skill.value === edSkill) {
        return (skill.isChecked = true);
      }
    });
  };

  render() {
    console.log(this.state.editedDateOfBirth);
    return (
      <Modal
        show={this.props.isEditFormShow}
        onHide={this.props.toggleEditForm}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="modalsHead" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalsBody">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">Name</Form.Label>
              <Form.Control
                type="text"
                name="editedName"
                value={this.state.editedName}
                onChange={this.handleInputChange}
                placeholder="Enter name"
              />
              <div style={{ fontSize: 16, color: "red" }}>
                {this.state.nameError}
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">Address</Form.Label>
              <Form.Control
                type="text"
                name="editedAddress"
                value={this.state.editedAddress}
                onChange={this.handleInputChange}
                placeholder="Enter address"
              />
              <div style={{ fontSize: 16, color: "red" }}>
                {this.state.addressError}
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">MobileNo.</Form.Label>
              <Form.Control
                type="number"
                name="editedMobileNo"
                value={this.state.editedMobileNo}
                onChange={this.handleInputChange}
                placeholder="Enter mobile number"
              />
              <div style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>
                {this.state.mobileNoError}
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">Email</Form.Label>
              <Form.Control
                type="email"
                name="editedEmail"
                value={this.state.editedEmail}
                onChange={this.handleInputChange}
                placeholder="Enter email"
              />
              <div style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>
                {this.state.emailError}
              </div>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label as="legend" className="lebel" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  className="radio"
                  type="radio"
                  label="Male"
                  name="editedGender"
                  value="Male"
                  checked={this.state.editedGender === "Male"}
                  onChange={this.handleInputChange}
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  className="radio"
                  type="radio"
                  label="Female"
                  name="editedGender"
                  value="Female"
                  checked={this.state.editedGender === "Female"}
                  onChange={this.handleInputChange}
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Form.Label className="lebel" column sm={2}>
                Skills
              </Form.Label>
              <Col sm={10}>
                {this.state.demoSkills.map((skill, index) => {
                  this.onCheck(skill);
                  return (
                    <div className="checkbox">
                      <input
                        key={index}
                        onChange={this.handleCheckBox}
                        type="checkbox"
                        checked={skill.isChecked}
                        value={skill.value}
                      />{" "}
                      {skill.value}
                    </div>
                  );
                })}
              </Col>
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label className="lebel">Country</Form.Label>
              <Form.Control
                as="select"
                name="editedCountry"
                value={this.state.editedCountry}
                onChange={this.handleInputChange}
              >
                <option>{this.state.editedCountry}</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className="lebel" column sm={4}>
                Date of birth
              </Form.Label>
              <Col sm={10}>
                <DatePicker
                  selected={this.state.editedDateOfBirth}
                  onChange={this.handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"

                />
                <div style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>
                  {this.state.dateOfBirthError}
                </div>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="modalsFoot">
          <Button
            variant="outline-dark"
            onClick={this.handleSubmit}
            type="submit"
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditForm1;
