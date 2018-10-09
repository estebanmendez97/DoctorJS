import React, { Component, Fragment } from "react";
import $ from "jquery";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      age: 0,
      weight: 0,
      height: 0
    };
    this.handleAge = this.handleAge.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  handleGender(e) {
    e.preventDefault();
    console.log("This is the EVENT", e.target.value);
    this.setState({
      gender: e.target.value
    });
  }

  handleAge(e) {
    e.preventDefault();
    this.setState({
      age: e.target.value
    });
  }

  handleWeight(e) {
    e.preventDefault();
    this.setState({
      weight: e.target.value
    });
  }

  handleHeight(e) {
    e.preventDefault();
    this.setState({
      height: e.target.value
    });
  }
  addData(gender, age, weight, height) {
    $.ajax({
      url: "/userData",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        gender: gender,
        age: age,
        weight: weight,
        height: height
      }),
      sucess: data => {
        console.log(data);
      },
      error: (xhr, status, error) => {
        console.log("FUNCTION ERROR", error);
      }
    });
  }
  submitData(event) {
    event.preventDefault();
    this.addData(
      this.state.gender,
      this.state.age,
      this.state.weight,
      this.state.height
    );
    this.setState({
      gender: "",
      age: 0,
      weight: 0,
      height: 0
    });
  }
  render() {
    return (
      <div>
        <Fragment>
          <h2>Your info</h2>
          <br />
          <br />
          <h4>Your Gender</h4>
          <input value={this.gender} onChange={this.handleGender} />
          <br />
          <h4>Your Age</h4>
          <input value={this.age} onChange={this.handleAge} />
          <br />
          <h4>Your Weight</h4>
          <input value={this.weight} onChange={this.handleWeight} />
          <br />
          <h4>Your Height</h4>
          <input value={this.height} onChange={this.handleHeight} />
          <br />
          <button onClick={this.submitData}>Submit your info</button>
        </Fragment>
      </div>
    );
  }
}
export default UserData;
