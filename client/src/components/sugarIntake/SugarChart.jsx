import React, { Component, Fragment } from "react";
import axios from "axios";

import PressureList from "./SugarList.jsx";

class SugarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: []
    };
  }
  componentDidMount() {
    axios
      .get("/submitLevel")
      .then(res => this.setState({ levels: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Fragment>
        <PressureList sugarLevels={this.state.levels} />
      </Fragment>
    );
  }
}
export default SugarChart;
