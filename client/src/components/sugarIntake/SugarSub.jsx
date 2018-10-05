import React, { Component, Fragment } from "react";
import $ from "jquery";
//import axios from "axios";

class SugarSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whenMesuare: undefined,
      Glucose: 0
    };

    this.handleWhenMeasure = this.handleWhenMeasure.bind(this);
    this.handleGlucose = this.handleGlucose.bind(this);
    this.submitLevel = this.submitLevel.bind(this);
    this.addLevel = this.addLevel.bind(this);
  }

  handleWhenMeasure(e) {
    e.preventDefault();
    console.log("this is the event ", e.target.value);
    this.setState({
      whenMesuare: e.target.value
    });
  }

  handleGlucose(e) {
    e.preventDefault();
    this.setState({
      Glucose: e.target.value
    });
  }

  addLevel(whenMesuare, Glucose) {
    $.ajax({
      url: "/submitLevel",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        whenMesuare: whenMesuare,
        Glucose: Glucose
      }),
      success: data => {},
      error: (xhr, status, error) => {}
    });
  }

  submitLevel(event) {
    event.preventDefault();
    this.addLevel(this.state.whenMesuare, this.state.Glucose);
    alert(this.state.whenMesuare);
    this.setState({
      Glucose: 0
    });
  }

  render() {
    return (
      <Fragment>
        <h4>
          When:
          <select
            onChange={this.handleWhenMeasure}
            value={this.state.whenMesuare}
            type="select"
          >
            <option>Before Breakfast</option>
            <option>Before Lunch</option>
            <option>Before Dinner</option>
            <option>1Hr.After Meal</option>
            <option>2Hrs. After Meal</option>
            <option>Before Physical Activity</option>
            <option>During Physical Activity</option>
            <option>After Physical Activity</option>
            <option>Before Bed</option>
            <option>Middle of Night</option>
            <option>Other</option>
          </select>
        </h4>
        <br />
        <h4>
          Glucose Level:
          <input
            value={this.state.Glucose}
            placeholder="000"
            onChange={this.handleGlucose}
          />
        </h4>
        <button onClick={this.submitLevel}>Submit</button>
      </Fragment>
    );
  }
}

export default SugarSub;
