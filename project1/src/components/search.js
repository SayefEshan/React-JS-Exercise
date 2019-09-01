import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: [],
      demoProfile: [
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
    this.handleChange = this.handleChange.bind(this);
  }
 
  generateRandomId = () => {
    let randomNumber = "xxxx-xxxx".replace(/[x]/g, function() {
      return ((Math.random() * 9) | 0).toString();
    });
    return randomNumber;
  };

  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.demoProfile;

      newList = currentList.filter(item => {
        let array = Object.values(item);

        const lc = array.toString().toLowerCase();

        const filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = this.state.demoProfile;
    }
    this.setState({
      filtered: newList
    });

    this.props.filteredArray(newList);
    console.log(newList);
  }

  render() {
    // console.log(this.state.filtered);
    return (
      <div className="search">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
            <i class="fas fa-search"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search"
            onChange={this.handleChange}
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    );
  }
}

export default Search;
