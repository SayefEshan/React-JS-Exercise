import React, { Component } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      mobileNo: "",
      email: "",
      gender: "",
      skills: [],
      country: "",
      dateOfBirth: "",
      demoSkills: [
        { value: "C++", isChecked: false },
        { value: "Java", isChecked: false },
        { value: "Python", isChecked: false },
        { value: "Javascript", isChecked: false }
      ],
      isEnabled: false,
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
      dateOfBirth: date
    });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckBox = event => {
    let demoSkills = this.state.demoSkills;
    let array = this.state.skills;

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
          skills: array
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

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.address) {
      addressError = "Address cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (!(this.state.mobileNo.length === 11)) {
      mobileNoError = "Invalid mobile number";
    }

    if (!this.state.dateOfBirth) {
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

  handleSubmit = event => {
    const {
      name,
      address,
      mobileNo,
      email,
      gender,
      skills,
      country,
      dateOfBirth
    } = this.state;
    console.log(typeof dateOfBirth)
    const isValid = this.validate();
    if (isValid) {
      this.props.inputTable(
        this.props.generateRandomId(),
        name,
        address,
        mobileNo,
        email,
        gender,
        skills,
        country,
        dateOfBirth
      );
      this.props.toggleForm();
    }
  };

  submitEnabled = () => {
    const {
      name,
      address,
      mobileNo,
      email,
      gender,
      skills,
      country,
      dateOfBirth
    } = this.state;

    this.state.isEnabled =
      name.length > 0 ||
      address.length > 0 ||
      mobileNo.length > 0 ||
      email.length > 0 ||
      gender.length > 0 ||
      skills.length > 0 ||
      country.length > 0 ||
      dateOfBirth.length > 0;
    return this.state.isEnabled;
  };

  render() {
    return (
      <Modal
        show={this.props.isFormShow}
        onHide={this.props.toggleForm}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="modalsHead" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Input Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalsBody">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Enter name"
              />
              <div style={{ fontSize: 16, color: "red",  fontWeight: "bold" }}>
                {this.state.nameError}
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                placeholder="Enter address"
              />
              <div style={{ fontSize: 16, color: "red", fontWeight: "bold"}}>
                {this.state.addressError}
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Enter email"
              />
              <div style={{ fontSize: 16, color: "red", fontWeight: "bold"}}>
                {this.state.emailError}
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="lebel">MobileNo.</Form.Label>
              <Form.Control
                type="number"
                name="mobileNo"
                value={this.state.mobileNo}
                onChange={this.handleInputChange}
                placeholder="Enter mobile number"
              />
              <div style={{ fontSize: 16, color: "red", fontWeight: "bold"}}>
                {this.state.mobileNoError}
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
                  name="gender"
                  value="Male"
                  checked={this.state.gender === "Male"}
                  onChange={this.handleInputChange}
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  className="radio"
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={this.state.gender === "Female"}
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
                name="country"
                value={this.state.country}
                onChange={this.handleInputChange}
              >
                <option />
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
                  selected={this.state.dateOfBirth}
                  onChange={this.handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholderText="Click to select a date"
                />
                <div style={{ fontSize: 16, color: "red", fontWeight: "bold"}}>
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
            disabled={!this.submitEnabled()}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InputForm;
