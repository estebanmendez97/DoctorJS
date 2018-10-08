import React, { Component, Fragment } from "react";
import $ from "jquery";

class Carbs extends Component {
  constructor(props){
    super(props);
    this.state = {
      amountMesuare: undefined,
      Carbs: 0
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
    $.ajax({
      url: "/carbLevel",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        amountMesuare: amountMesuare,
        Carbs : Carbs
      }),
      success: data => {
        console.log(data);
      },
      error: (xhr, status, error) => {
        console.log(error);
      }
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

  render(){
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
   </Fragment>
    );
  }
}





export default Carbs;
