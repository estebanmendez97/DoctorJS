import React, { Component, Fragment } from "react";
import $ from "jquery";

class BloodPressure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whenReading: undefined,
      bloodPresure: 0
    };

    this.addReading = this.addReading.bind(this);
    this.submitReading = this.submitReading.bind(this);
    this.handleWhenReading = this.handleWhenReading.bind(this);
    this.handleBloodPressure = this.handleBloodPressure.bind(this);
  }

  handleWhenReading(e) {
    e.preventDefault();
    console.log("this is the event", e.target.value);
    this.setState({
      whenReading: e.target.value
    });
  }

  handleBloodPressure(e) {
    e.preventDefault();
    this.setState({
      bloodPresure: e.target.value
    });
  }

  addReading(whenReading, bloodPresure) {
    $.ajax({
      url: "/bloodPresure",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        whenReading: whenReading,
        bloodPresure: bloodPresure
      }),
      success: data => {
        console.log(data);
      },
      error: (xhr, status, error) => {
        console.log(error);
      }
    });
  }

  submitReading(event) {
    event.preventDefault();
    this.addReading(this.state.whenReading, this.state.bloodPresure);
    alert(this.state.whenReading);
    this.setState({
      bloodPresure: 0
    });
  }

  render() {
    return (
      <div>
        <Fragment>
          <h4>
            When:
            <select
              onChange={this.handleWhenReading}
              value={this.state.whenReading}
              type="select"
            >
              <option>Blood Pressure Readings</option>
              <option>Morning Reading</option>
              <option>Afternoon Reading</option>
              <option>Night Reading</option>
            </select>
          </h4>
          <br />
          <h4>
            Blood Pressure Level:
            <input
              placeholder="000"
              value={this.bloodPresure}
              onChange={this.handleBloodPressure}
            />
            <br />
            <button onClick={this.submitReading}>Submit</button>
          </h4>
        </Fragment>
      </div>
    );
  }
}
export default BloodPressure;
