import React, { Component } from "react";
import axios from "axios";

import PressureList from "./pressureList.jsx";

class PressureGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get("/bloodPresure")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <PressureList pressure={this.state.list} />
      </div>
    );
  }
}
export default PressureGraph;
