import React, { Component, Fragment } from "react";
import CarbsList from "./CarbsList.jsx";
import axios from "axios";

class Carbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.handleAmountMesuare = this.handleAmountMesuare.bind(this);
    this.handleCarbs = this.handleCarbs.bind(this);
    this.submitLevel = this.submitLevel.bind(this);
    this.addLevel = this.addLevel.bind(this);
  }

  handleAmountMesuare(e) {
    e.preventDefault();
    console.log("this is the event ", e.target.value);
    this.setState({
      amountMesuare: e.target.value
    });
  }

  handleCarbs(e) {
    e.preventDefault();
    this.setState({
      Carbs: e.target.value
    });
  }

  addLevel(amountMesuare, Carbs) {
    axios
      .post("/carbLevel", {
        amountMesuare: amountMesuare,
        Carbs: Carbs
      })
      .then(() => this.getLevel())
      .catch(error => console.log("ERROR:", error));
  }

  getLevel() {
    axios
      .get("/carbLevel")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitLevel(event) {
    event.preventDefault();
    this.addLevel(this.state.amountMesuare, this.state.Carbs);
    alert(this.state.amountMesuare);
    this.setState({
      Carbs: 0
    });
  }

  render() {
    return (
      <Fragment>
        <h3>
          When:
          <select
            onChange={this.handleAmountMesuare}
            value={this.state.amountMesuare}
            type="select"
          >
            <option>Breakfast</option>
            <option>snack1</option>
            <option>lunch</option>
            <option>snack2</option>
            <option>Dinner</option>
          </select>
        </h3>
        <br />
        <h3>
          Carbs Level:
          <input
            value={this.state.Carbs}
            placeholder="000"
            onChange={this.handleCarbs}
          />
        </h3>
        <button onClick={this.submitLevel}>Submit</button>
        <br />
        <CarbsList carbsList={this.state.list} />
      </Fragment>
    );
  }
}

export default Carbs;
