import React, { Component, Fragment } from "react";
import axios from "axios";

import PressureList from "./PressureList.jsx";

class BloodPressure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.addReading = this.addReading.bind(this);
    this.submitReading = this.submitReading.bind(this);
    this.handleWhenReading = this.handleWhenReading.bind(this);
    this.handleBloodPressure = this.handleBloodPressure.bind(this);
  }

  handleWhenReading(e) {
    e.preventDefault();
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
    axios
      .post("/bloodPresure", {
        whenReading: whenReading,
        bloodPresure: bloodPresure
      })
      .then(() => this.getReading())
      .catch(error => console.log("Error:", error));
  }

  getReading() {
    axios
      .get("/bloodPresure")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        console.log(err);
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
          <br />
          <PressureList pressure={this.state.list} />
        </Fragment>
      </div>
    );
  }
}
export default BloodPressure;
